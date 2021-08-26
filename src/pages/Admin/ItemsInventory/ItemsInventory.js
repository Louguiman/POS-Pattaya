import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemsListRowUI from '../../../components/Admin/ItemsListRowUI/ItemsListRowUI'

const ItemsInventory = (props) => {
  // Prepare states
  const [name, setName] = useState('')
  const [menu, setMenu] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [items, setItems] = useState([''])
  const [loading, setLoading] = useState(true)

  // Fetch all items on initial render
  useEffect(() => {
    fetchItems()
  }, [])

  // Fetch all items
  const fetchItems = async () => {
    // Send GET request to 'items/all' endpoint
    axios
      .get('http://localhost:4001/items/all')
      .then(response => {
        // Update the items state
        setItems(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`Il y a eu un probleme lors du chargement de la liste des produits: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setName('')
    setMenu('')
    setPrice('')
    setQuantity('')
  }

  // Create new book
  const handleItemCreate = () => {
    // Send POST request to 'items/create' endpoint
    axios
      .post('http://localhost:4001/items/create', {
        name: name,
        menu: menu,
        price: price,
        quantity: quantity
      })
      .then(res => {
        console.log(res.data)

        // Fetch all items to refresh
        // the items in the items list
        fetchItems()
      })
      .catch(error => console.error(`There was an error creating the ${name} item: ${error}`))
  }

  // Submit new item
  const handleItemSubmit = () => {
    // Check if all fields are filled
    if (name.length > 0 && menu.length > 0 && price.length > 0 && quantity.length > 0) {
      // Create new item
      handleItemCreate()

      console.info(`Item ${name} by ${menu} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove item
  const handleItemRemove = (id, name) => {
    // Send PUT request to 'items/delete' endpoint
    axios
      .put('http://localhost:4001/items/delete', { id: id })
      .then(() => {
        console.log(`Item ${name} removed.`)

        // Fetch all items to refresh
        // the items on the items list
        fetchItems()
      })
      .catch(error => console.error(`There was an error removing the ${name} Item: ${error}`))
  }

  // Reset items list (remove all items)
  const handleListReset = () => {
    // Send PUT request to 'items/reset' endpoint
    axios.put('http://localhost:4001/items/reset')
      .then(() => {
        // Fetch all items to refresh
        // the items on the Items list
        fetchItems()
      })
      .catch(error => console.error(`There was an error resetting the Items list: ${error}`))
  };


  return (
    <>
      <ItemsListRowUI 
        items={items} 
        loading={loading}
        handleItemSubmit={handleItemSubmit} 
        handleInputsReset={handleInputsReset}
      />
      {items.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Réinitialiser l'inventaire .</button>
      )}
    </>
  );

}

class InventoryPage extends React.Component {
  render() {
    return (<ItemsInventory style={{ margin: '0 16px' }}/>)
  }
}
export default InventoryPage;

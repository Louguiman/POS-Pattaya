import React, { useState }  from 'react'
import NewItem from '../../../components/tables/NewItem'
import ItemsTable from '../../../components/tables/ItemsTable'

const ItemsListRowUI = (props) => {
   
  const [items, setItems] = useState(props.items)

  return (
    <div className="container">
      <h1>Inventaire des Produits</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Ajouter de Nouveaux Produits</h2>
          <hr/>
          <NewItem items={props.items} loading={props.loading} handleItemSubmit={props.handleItemSubmit} handleInputsReset={props.handleInputsReset} />
        </div>
        <div className="flex-large">
          <h2>Liste des Produits</h2>
          <ItemsTable items={items}  loading={props.loading} handleItemSubmit={props.handleItemSubmit} handleInputsReset={props.handleInputsReset}  />
        </div>
      </div>
    </div>
  )
}

export default ItemsListRowUI;

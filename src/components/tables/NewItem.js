import React,{useState } from 'react'

const NewItem = (props) => {
      // Prepare states
  const [name, setName] = useState(props.items)
  const [menu, setMenu] = useState(props.items)
  const [price, setPrice] = useState(props.items)
  const [quantity, setQuantity] = useState(props.items)
  const [items, setItems] = useState(props.items)
  const [loading, setLoading] = useState(true)
  return (
    /* Form for creating new Item */
    <div>
        <div classname="book-list-form">
            <div classname="form-wrapper" onsubmit={props.handleItemSubmit}>
                <div classname="form-row">
                    <fieldset>
                        <label classname="form-label" htmlfor="title">Nom:</label>
                        <input classname="form-input" type="text" id="name" name="name" defaultValue="{name}" onchange={(e) => setName(e.currentTarget.value)} />
                    </fieldset>
                    <fieldset>
                        <label classname="form-label" htmlfor="menu">Menu catégorie:</label>
                        <input classname="form-input" type="text" id="menu" name="menu" defaultValue="{menu}" onchange={(e) => setMenu(e.currentTarget.value)}/>
                    </fieldset>
                </div>
                <div classname="form-row">
                    <fieldset>
                        <label classname="form-label" htmlfor="price">Prix:</label>
                        <input classname="form-input" type="text" id="price" name="price" defaultValue="{price} FCFA" onchange={(e) => setPrice(e.currentTarget.value)}/>
                    </fieldset>
                    <fieldset>
                        <label classname="form-label" htmlfor="quantity">Quantité:</label>
                        <input classname="form-input" type="text" id="quantity" name="quantity" defaultValue="{quantity}" onchange={(e)=> setQuantity(e.currentTarget.value)}/>
                    </fieldset>
                </div>
            </div>
            <button onclick={props.handleItemSubmit} classname="btn btn-add">Ajouter</button>
        </div>
    </div>

  )
}

export default NewItem
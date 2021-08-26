import React from 'react'


const ItemsTable = (props) => (
    
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Menu</th>
                <th>prix</th>
                <th>Stock <br/> Quantité </th>
            </tr>
        </thead>
        <tbody>
            {props.items.length > 0 ? (
                props.items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.menu}</td>
                        <td>{item.price} FCFA</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button className="button muted-button">modifier</button>
                            <button className="button muted-button" handleRemove={this.props.handleRemove} >Supprimer</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>Aucun Produit dans l'inventaire</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default ItemsTable
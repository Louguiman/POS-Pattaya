import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const BuyGroup = () => (
    <div className="btn-group" style={{justifyContent:'stretch'}}>
        <style type="text/css">
            {`
                .btn-flat {
                background-color: black;
                color: white;
                }
                .btn-flat.hover{
                    scale: 1.5:
                }
                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
        </style>
        <ButtonGroup className="btn-grp mb-0">
            <Button>Tout Effacer</Button>
            <Button>Nouvelle <br />Commande</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="btn-grp mb-0">
            <Button variant="flat" size="xxl">Imprimer</Button>
            <Button variant="flat" size="xxl">Payer</Button>
        </ButtonGroup>
        <br />
    </div>
);

export default BuyGroup;
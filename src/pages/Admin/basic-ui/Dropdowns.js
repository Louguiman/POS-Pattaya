import React, { Component } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export class Dropdowns extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h2 className="page-title">
            Inventaire
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Admin</a></li>
              <li className="breadcrumb-item active" aria-current="page">Stocks</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ajouter Stock</h4>
                <p className="card-description">Ajouter de nouveaux produits dans votre inventaire </p>
                <form className="forms-sample">
                  <Form.Group className="row">
                    <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Nom</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="Username" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Groupe</label>
                    <div className="col-sm-9">
                    <Form.Control type="name" className="form-control" id="exampleInputEmail2" placeholder="Menu" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Quantité</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Quantité disponible du stock" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Prix Unitaire </label>
                    <div className="col-sm-9">
                    <Form.Control type="integer" className="form-control" id="exampleInputPassword2" placeholder="Prix Unitaire en FCFA" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                    <div className="col-sm-9">
                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                    </div>
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-primary mr-2">Ajouter</button>
                  <button className="btn btn-light">Anuler</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns

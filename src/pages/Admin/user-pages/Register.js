import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Créez un Nouvel Utilisateur</h4>
                <h6 className="font-weight-light">Verifier la permission du compte</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Nom d'Utilisateur" />
                  </div>
                  
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Permission</option>
                      <option>Employé</option>
                      <option>Administrateur</option>
                      
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Mot de Passe" />
                  </div>
                  
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">Créer l'Utilisateur</Link>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register

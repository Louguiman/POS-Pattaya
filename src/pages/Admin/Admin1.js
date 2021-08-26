import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  



/** Layouts **/  
import LoginLayout from "./layouts/LoginLayout";  
import MainLayout from "./layouts/MainLayout";  
  
/** Components **/  

import InventoryPage from './ItemsInventory/ItemsInventory'  
import {home as DashBoard} from './Start-page';
import Users  from './users/users';
import SettingsPage from './settings/settings';
import OrdersPage from './Orders/Orders'; 
import LoginPage from './LoginPage/LoginPage';

const Admin = () => {
  return (
      <Router history={Window.history}>  
        <Switch>  
          <Redirect exact={true} from="/admin" to="/login" />
          <Route path="/login" component={LoginPage} />
          <MainLayout>
            <Route path="/admin/home" component={DashBoard} />
            <Route path={"admin/inventory"} component={InventoryPage} />
            <Route path={"admin/users"} component={Users} />
            <Route path={"admin/settings"} component={SettingsPage} />
            <Route path={"admin/orders"} component={OrdersPage} />
          </MainLayout>
        </Switch>  
      </Router>  
    );
};

export default Admin;
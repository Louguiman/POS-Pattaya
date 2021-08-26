import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/admin/dashboard" component={ Dashboard } />

          <Route path="/admin/basic-ui/buttons" component={ Buttons } />
          <Route path="/admin/basic-ui/dropdowns" component={ Dropdowns } />

          <Route path="/admin/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/admin/tables/basic-table" component={ BasicTable } />

          <Route path="/admin/icons/mdi" component={ Mdi } />

          <Route path="/admin/charts/chart-js" component={ ChartJs } />

          <Route path="/admin/user-pages/login-1" component={ Login } />
          <Route path="/admin/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


         <Redirect to="admin/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
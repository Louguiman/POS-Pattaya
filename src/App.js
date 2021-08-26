 import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/Dashboard';

import "./i18n"
import Admin from './pages/Admin/Admin';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/admin" component={Admin} />
    </Switch>
  )
}
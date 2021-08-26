import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

import Home from "./App";
import LoginPage from './pages/Admin/LoginPage/'

ReactDOM.render(
    <Router>
        
            <Home />
        
    </Router>,
    document.getElementById("root")

)

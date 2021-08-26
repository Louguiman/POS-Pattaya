import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

          
const { Header } = Layout
const { SubMenu } = Menu;

class Navbar extends Component {
  render() {
    return (<div>
      <Header className="site-layout-background" style={{ padding: 0, height: '90px'}} >
            

            <Menu theme="dark" mode="horizontal" >
              <Menu.Item key="1">
                < Link to="/" >Caisse</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin">Administrateur</Link>
              </Menu.Item>
            </Menu>
          </Header>
    </div>);
  }
}

export default Navbar;

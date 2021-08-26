import React, { Component } from "react";
import { Menu, Button, Layout } from 'antd';
import {Link} from "react-router-dom";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            <Link to={"/admin/home"}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ContainerOutlined />}>
            <Link to={"/admin/inventory"}>Inventaire</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>
            <Link to={"/admin/orders"}>Commande</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PieChartOutlined />}>
            <Link to={"/admin/users"}>Utilisateurs</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            <Link to={"/admin/settings"}>Parametres</Link>
          </Menu.Item>
          
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;

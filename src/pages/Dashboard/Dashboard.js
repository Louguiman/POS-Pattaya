import React, { useState } from 'react';

import './Dashboard.css'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Navbar from '../../components/navbar/navbar';
import MenuLayout from '../../components/MenuLayout/MenuLayout';
import BuyGroup from '../../components/BuyGroup';
import Cart from '../../components/Cart';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const style = { background: '#0092ff', padding: '8px 25px 10px 0' };


const Dashboard = () => {
  
  const orderItemsData = [];
  const [Items, setItem] = useState(orderItemsData);

  const addItem = (Item) => {
    Item.id = Items.length + 1
    setItem([...Items, Item])
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider width="400" theme="dark"  >
        <Cart className="flex-large" Items={Items} />
        <BuyGroup />
      </Sider>
      <Layout className="site-layout">
        <Navbar />
        <Content style={{ margin: '0 16px' }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <MenuLayout addItem={addItem} Items={Items} />
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Pattaya  POS  System ©2021 Created by Louguiman</Footer>
      </Layout>
    </Layout>
  );

}


export default Dashboard;

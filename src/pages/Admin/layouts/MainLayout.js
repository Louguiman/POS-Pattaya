import React, { Component } from 'react';    

import { Layout } from 'antd';

import Navbar from '../../../components/navbar/navbar';
import Sidebar from '../../../components/Admin/sidebar/sidebar';

const { Header, Footer, Content } = Layout; 

const MainLayout = (props) => {  
  
  return (  
    <Layout style={{ minHeight: '100vh' }}>
      
      <Sidebar />
      
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Content style={{ margin: '0 16px' }} >
          {props.children}
          <Footer>Footer</Footer>
        </Content>
        
      </Layout>
    </Layout>

    
  )  
}  
  
export default MainLayout ;
import React from 'react';
import ReactDOM from 'react-dom'

import { Layout } from 'antd';
import Navbar from '../../../components/navbar/navbar';

const { Header, Footer, Sider, Content } = Layout;


class LoginLayout extends React.Component {

  render(props) {
    
    return (
      
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Content>
            {props.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      
    )
  }
}


export default LoginLayout;
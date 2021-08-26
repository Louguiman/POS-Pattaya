import React, {useEffect} from 'react'


import { Grid, Image } from 'semantic-ui-react'
import { Menu } from 'antd';
import './MenuLayout.css'


const MenuLayout = () => {
  

  return (
  <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
        <Menu >
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Entrée</h2>
          <Menu.Item className ="Menu.Item"  >Poulet Sauté</Menu.Item>
          <Menu.Item className ="Menu.Item" >Poulet Ravioli</Menu.Item>
          <Menu.Item className ="Menu.Item" >Poulet Flambé</Menu.Item>
          <Menu.Item className ="Menu.Item" >Steaks</Menu.Item>
          <Menu.Item className ="Menu.Item" >Carpe</Menu.Item>
          <Menu.Item className ="Menu.Item" >Capitaine</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu title="Desserts">
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Désserts</h2>
          <Menu.Item className ="Menu.Item" >CheeseCake</Menu.Item>
          <Menu.Item className ="Menu.Item" >Poulet Ravioli</Menu.Item>
          <Menu.Item className ="Menu.Item" >Poulet Flambé</Menu.Item>
          <Menu.Item className ="Menu.Item" >Steaks</Menu.Item>
          <Menu.Item onClick="">Carpe</Menu.Item>
          <Menu.Item className ="Menu.Item" >Gateau au chocolat</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
       <Menu title="">
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Boisson & Jus</h2>
          <Menu.Item className ="Menu.Item" >Sprite</Menu.Item>
          <Menu.Item className ="Menu.Item" >Coca-Cola</Menu.Item>
          <Menu.Item className ="Menu.Item" >Pepsi</Menu.Item>
          <Menu.Item className ="Menu.Item" >Double 7</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus de Pomme</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus d'orange</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Menu title="Boisson & Jus">
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Boisson & Jus</h2>
          <Menu.Item className ="Menu.Item" >Sprite</Menu.Item>
          <Menu.Item className ="Menu.Item" >Coca-Cola</Menu.Item>
          <Menu.Item className ="Menu.Item" >Pepsi</Menu.Item>
          <Menu.Item className ="Menu.Item" >Double 7</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus de Pomme</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus d'orange</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu title="Boisson & Jus">
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Boisson & Jus</h2>
          <Menu.Item className ="Menu.Item" >Sprite</Menu.Item>
          <Menu.Item className ="Menu.Item" >Coca-Cola</Menu.Item>
          <Menu.Item className ="Menu.Item" >Pepsi</Menu.Item>
          <Menu.Item className ="Menu.Item" >Double 7</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus de Pomme</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus d'orange</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu title="Boisson & Jus">
          <h2 style={{textAlign:'center', margin: '5px 0 0 0' }}>Boisson & Jus</h2>
          <Menu.Item className ="Menu.Item" >Sprite</Menu.Item>
          <Menu.Item className ="Menu.Item" >Coca-Cola</Menu.Item>
          <Menu.Item className ="Menu.Item" >Pepsi</Menu.Item>
          <Menu.Item className ="Menu.Item" >Double 7</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus de Pomme</Menu.Item>
          <Menu.Item className ="Menu.Item" >Jus d'orange</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>)
}

// Map Redux state to React component props


export default MenuLayout;

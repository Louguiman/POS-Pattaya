import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import banner from "./banner.png";
const style1 = {
  background: "grey",
  minWidth: "100%",
  Height: "768px",
  padding: "8px 0px 10px 0",
  align: "center",
  justifyContent: "center",
};
const style2 = {
  background: "white",
  height: "300px",
  width: "25%",
  padding: "40px",
  alignSelf: "center",
};

class LoginPage extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Succes: ", values);
    };
    return (
      <div className="container" style={style1}>
        <div className="container" style={style2}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le nom d'utilisateur",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nom d'utilisateur"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer votre mot de passe!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mot de Passe"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Se Connecter
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div style={{"margin":'20px 0 0 0'}}>
          <img src={banner} alt="" style={{"max-width": '100%', "height": 'auto'}} />
        </div>
      </div>
    );
  }
}

export default LoginPage;

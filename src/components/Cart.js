import React, { useState } from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import TabView from '../components/TabView'
const orderData = [];

for (let i = 0; i < 5; i++) {
  orderData.push({
    key: i.toString(),
    name: `Burger ${i}`,
    qty: '2',
    price: ` ${i * 250}`,
    total: ` ${i * 250}*2`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
          children
        )}
    </td>
  );
};

const Cart = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.Items);
  
  return (
    <TabView>
      <table>
        <thead>
          <tr>
            <th><h3>Nom</h3></th>
            <th><h3>Prix</h3></th>
            <th><h3>Quantité</h3></th>
            <th><h3>Total</h3></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((orderItem) => (
              <tr key={orderItem.id}>
                <td>{orderItem.name}</td>
                <td>{orderItem.quantity}</td>
                <td>
                  {orderItem.price}
                </td>
                <td>
                  {orderItem.total}
                </td>
              </tr>
              
            ))
          ) : (
              <tr>
                <td colSpan={4}>Aucune commande pour cette table</td>
              </tr>
            )}
        </tbody>
      </table>
    </TabView>
  );
};



export default Cart;
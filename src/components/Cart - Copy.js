import React, { useState } from 'react';
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
  const [data, setData] = useState(orderData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      quantity: '',
      price: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Produits',
      dataIndex: 'name',
      width: '65%',
      editable: false,
    },
    {
      title: 'quantité',
      dataIndex: 'qty',
      width: '10%',
      editable: true,
    },
    {
      title: 'prix',
      dataIndex: 'price',
      width: '10%',
      editable: false,
    }, ,
    {
      title: 'Total',
      dataIndex: 'total',
      width: '15%',
      editable: false,
    },
    {
      title: '',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Sauvegarder
            </a>
            <Popconfirm title="Êtes-vous sûr de vouloir annulez la commande?" onConfirm={cancel}>
              <a>Annuler</a>
            </Popconfirm>
          </span>
        ) : (
            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
              Modifier
            </a>
          );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'quantity' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <TabView>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered={false}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"

        />
      </Form>
    </TabView>
  );
};



export default Cart;
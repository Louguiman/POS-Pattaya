import React from 'react';
import { Tabs, Layout } from 'antd';
import Cart from './Cart';
import logo from '../logo.png'
const { Header, Content } = Layout;


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const TabView = (props) => (
    <Layout>
        <Header style={{height:'90px '}}>
            <div className="logo" > 
              <img src={logo} alt=""style={{height: '110px'}} />
            </div>
        </Header>
        <Content style={{padding:'5px'}}>
            <Tabs defaultActiveKey="1" onChange={callback} style={{ justifyContent: 'space-evenly' }}>
                <TabPane tab="Table 1" key="1">
                    {props.children}
                </TabPane>
                <TabPane tab="Table 2" key="2">
                    {props.children}
                </TabPane>
                <TabPane tab="Table 3" key="3">
                    {props.children}
                </TabPane>
                <TabPane tab="Table 4" key="4">
                    {props.children}
                </TabPane>
                <TabPane tab="Table 5" key="5">
                    {props.children}
                </TabPane>

            </Tabs>
        </Content>
    </Layout>
);



export default TabView;


const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

class Demo extends React.Component {
  newTabIndex = 0;

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    const newPanes = [...panes];
    newPanes.push({ title: 'New Tab', content: <Cart/>, key: activeKey });
    this.setState({
      panes: newPanes,
      activeKey,
    });
  };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  render() {
    const { panes, activeKey } = this.state;
    return (
      <Tabs
        type="editable-card"
        onChange={this.onChange}
        activeKey={activeKey}
        onEdit={this.onEdit}
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

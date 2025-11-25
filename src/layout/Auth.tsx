// import React from 'react'

import { Navigate, NavLink, Outlet } from "react-router-dom"
import { userAuth } from "../store"
import Icon from '@ant-design/icons';
import logo from "../assets/logo-pizza.svg";

import { Layout, Menu, theme } from 'antd';
import { useState } from "react";
import Home from "../components/icons/Home";
import UserIcon from "../components/icons/UserIcon";
import { foodIcon } from "../components/icons/FoodIcon";
import GiftIcon from "../components/icons/GiftIcon";
import BasketIcon from "../components/icons/BasketIcon";

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
      key:'/',
      icon: <Icon component={Home}/>,
      label:<NavLink to='/'>Home</NavLink>
    },
    {
      key:'/users',
      icon: <Icon component={UserIcon}/>,
      label:<NavLink to='/users'>Users</NavLink>
    }
    ,
    {
      key:'/restaurants',
      icon: <Icon component={foodIcon}/>,
       label:<NavLink to='/restaurants'>Restaurants</NavLink>
    }
    ,
    {
      key:'/products',
      icon: <Icon component={BasketIcon}/>,
      label:<NavLink to='/products'>Products</NavLink>
    },
    {
      key:'/promos',
      icon: <Icon component={GiftIcon}/>,
      label:<NavLink to='/promos'>Promos</NavLink>
    }
    
];


function Auth() {
    const {user} =userAuth()
    if(user === null){
        return <Navigate to={'/auth/login'} replace={true} />
    }

    
    const [collapsed, setCollapsed] = useState(false);

    const {
      token: { colorBgContainer },
    } = theme.useToken();
  return (
    <div>   
       <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{display:"flex",justifyContent:'center',alignContent:'center',padding:6,gap:10,paddingTop:10}}>
        <img src={logo} style={{ width: 25, height: 25 }} alt="logo" />
          <h1 style={{fontSize:24}}>Ovenly</h1>
          </div>
        <Menu theme="light" defaultSelectedKeys={['/']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} /> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
             <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
       </Layout>
      
    </div>
  )
}

export default Auth

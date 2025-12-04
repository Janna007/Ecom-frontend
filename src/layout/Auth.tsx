// import React from 'react'

import { Navigate, NavLink, Outlet } from "react-router-dom";
import { userAuth } from "../store";
import Icon, {BellOutlined} from "@ant-design/icons";
import logo from "../assets/logo-pizza.svg";

import {
  Avatar,
  Badge,
  Dropdown,
  Flex,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { useState } from "react";
import Home from "../components/icons/Home";
import UserIcon from "../components/icons/UserIcon";
import { foodIcon } from "../components/icons/FoodIcon";
import GiftIcon from "../components/icons/GiftIcon";
import BasketIcon from "../components/icons/BasketIcon";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../http/mutations";

const { Header, Content, Footer, Sider } = Layout;


const getItems=(role:string)=>{
  const baseItems=[
    {
      key: "/",
      icon: <Icon component={Home} />,
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "/restaurants",
      icon: <Icon component={foodIcon} />,
      label: <NavLink to="/restaurants">Restaurants</NavLink>,
    },
    {
      key: "/products",
      icon: <Icon component={BasketIcon} />,
      label: <NavLink to="/products">Products</NavLink>,
    },
    {
      key: "/promos",
      icon: <Icon component={GiftIcon} />,
      label: <NavLink to="/promos">Promos</NavLink>,
    },
  ]


  if(role==='admin'){
    return [...baseItems,{
      
        key: "/users",
        icon: <Icon component={UserIcon} />,
        label: <NavLink to="/users">Users</NavLink>,
      
    }]
  }else{
    return baseItems
  }


}





function Auth() {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { user,logOut } = userAuth();
  
  const {mutate:logoutMutation}=useMutation({
    mutationKey:["logout"],
    mutationFn: logout,
    onSuccess:async()=>{
      console.log("succesfully logged out")
      //reset store
      logOut()
      return
    }   
  })

  
  if (user === null) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }
  const items=getItems(user.role)
 
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        {/* sider bar */}
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: 6,
              gap: 10,
              paddingTop: 10,
            }}
          >
            <img src={logo} style={{ width: 25, height: 25 }} alt="logo" />
            <h1 style={{ fontSize: 24 }}>Ovenly</h1>
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>

          {/* hedaer */}
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex gap="middle" align="start" justify="space-between">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "30px",
                  margin: "20px",
                }}
              >
                <p
                  style={{
                    color: "#B55638",
                    backgroundColor: "#f0cdc2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {user?.role==='admin' ? "Global":user?.tenant?.address}
                </p>
              </div>
              <Space size={16} style={{marginRight:'20px'}}>
              <Badge>
              <BellOutlined/>
                </Badge>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "/logout",
                        label: "Logout",
                        onClick:()=> logoutMutation()
                      },
                    ],
                  }}
                  placement="bottomLeft"
                  arrow
                >
                  <Avatar
                    style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                  >
                    U
                  </Avatar>
                </Dropdown>
              </Space>
            </Flex>
          </Header>

          {/* page contents */}
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} /> */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>

          {/* //footer */}
          <Footer style={{ textAlign: "center" }}>
            Pizza Delivery App by jannakondeth
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Auth;

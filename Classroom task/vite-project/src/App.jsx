import "./App.css";
import React, { useState } from "react";
import {
  CalendarOutlined,
  FileOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Container from "react-bootstrap/Container";
import TeacherLogin from "./Components/TeacherLogin";
const { Header, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Calendar", "2", <CalendarOutlined />),
  getItem("Enrolled", "sub1", <UserOutlined />, [
    getItem("To Do", "3"),
    getItem("BF204", "4"),
  ]),
  getItem("Achived Classes", "5", <FileOutlined />),
  getItem("Settings", "6", <SettingOutlined />),
];
const App = () => {
  const [loginRegister, setLoginRegister] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{}}
                width={35}
                height={35}
                src="../public/classroom-logo.svg"
                alt=""
              />
              <a style={{ paddingLeft: "10px" }} href="#">
                <h1
                  style={{
                    textDecoration: "none",
                    color: "#2d2c2e",
                    fontWeight: "500",
                  }}
                >
                  Classroom
                </h1>
              </a>
            </div>
            <ul style={{ display: "flex" }}>
              <li style={{ listStyle: "none", padding: "0px 15px" }}><Button onClick={()=>{
                setLoginRegister(false)
                setIsLogged(true)
              }}>Teacher Login</Button></li>
              <li style={{ listStyle: "none", padding: "0px 15px" }}><Button onClick={()=>{
                setLoginRegister(true)
              }}>Student Login</Button></li>
            </ul>
          </Container>
        </Header>
        {
          isLogged ? <TeacherLogin/> : ""
        }
        
      </Layout>
    </Layout>
  );
};
export default App;

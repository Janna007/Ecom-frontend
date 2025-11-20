import { Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-pizza.svg";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

function Login() {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space direction="vertical">
        <Layout.Content
          style={{ display: "flex", justifyContent: "center", gap: 30 }}
        >
          <h1>ovion</h1>
          <img src={logo} style={{ width: 35, height: 35 }} alt="logo" />
        </Layout.Content>

        <Card
          style={{
            width: 300,
            borderRadius: 0,
            borderWidth: 0,
            boxShadow: "none",
          }}
          title={
            <Space
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <LockOutlined />
              Sign In
            </Space>
          }
        >
          <Form initialValues={{ remember: true }}>
            <Form.Item<FieldType>
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
                { type: "email", message: "please enter a valid email" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="username" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="password"
              />
            </Form.Item>

            <Flex style={{ justifyContent: "space-between" }}>
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a style={{ paddingTop: "8px", fontSize: "12px" }} href="#">
                Forgot Password?
              </a>
            </Flex>

            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </Layout>
  );
}

export default Login;

import {
  Alert,
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-pizza.svg";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../http/api";
import type { FieldType } from "../../types";

function Login() {
  const loginUser = async (credentials: FieldType) => {
    //server call logic
    const data= login(credentials); 
    return data
  };

  const { data,error, isError, isPending, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    
    onSuccess: () => {
      console.log("Logged in successfully!", data);
    },

    onError: (err: any) => {
      console.log("Login error:", err?.message);
    },
  });

  // console.log(isError)
  // console.log("err.messge",error?.message)
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
        <Layout.Content style={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} style={{ width: 35, height: 35 }} alt="logo" />
          <h1>ovion</h1>
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
          {isError && (
            <Alert
              message={error.message}
              type="error"
              style={{ marginBottom: 10 }}
            />
          )}
          <Form
            initialValues={{ remember: true }}
            onFinish={(values) => {
              mutate({ email: values.email, password: values.password });
              console.log(values)
            }}
          >
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
                width: "100%",
              }}
            >
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                loading={isPending}
              >
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

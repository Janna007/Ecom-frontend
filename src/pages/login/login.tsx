import { Button, Card, Checkbox, Form, Input, Layout, Space } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../assets/logo-pizza.svg'


function Login() {
  return (
    <Layout style={{height:'100vh',display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Space direction="vertical">
      <Layout.Content style={{display:"flex",justifyContent:"center",gap:30}}>
        <h1>ovion</h1>
      <img src={logo} style={{ width: 35, height: 35 }} alt="logo" />

      </Layout.Content>

      <Card
        style={{ width: 300 ,borderRadius:0,borderWidth:0,boxShadow:'none' }}
          title={
            <Space style={{display:'flex',justifyContent:"center",alignItems:"center",width:"100%"}}>
              <LockOutlined />
              Sign In
            </Space>
            }
            >
              <Form
  
  >
    <Form.Item>
      <Input prefix={<UserOutlined />} placeholder="username" />
    </Form.Item>

    <Form.Item>
        <Input.Password prefix={<LockOutlined />}  placeholder="password"/>
    </Form.Item>


   <Form.Item >
      <Checkbox>Remember me</Checkbox>
      <a href="#">Forgot Password</a>
    </Form.Item>

   
    <Form.Item style={{display:"flex",justifyContent:'center',alignContent:'center',width:'100%'}}>
      <Button type="primary" htmlType="submit">
        Log In
      </Button>
    </Form.Item>


  </Form>
      </Card>
      </Space>

    </Layout>
  )
}


export default Login

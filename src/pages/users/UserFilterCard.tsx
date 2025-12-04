import { Button, Flex, Input, Select } from "antd"
import { PlusOutlined } from "@ant-design/icons";


function UserFilterCard({ filters,onfilterChange }:any) {
  return (
    <div
    style={{
      marginTop: "30px",
      width: "100%",
      height: "100px",
      backgroundColor: "white",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Flex gap="middle" style={{ width: "100%" }}>
      <div style={{ width: "70%" }}>
        <Flex gap="middle">
          <Input.Search placeholder="input search text" style={{ width: 200 }}
           value={filters.serch}
           onChange={(e)=>{onfilterChange("search",e.target.value)}} 
           />
          <Select
            placeholder="Select Role"
            // value={filters.role}
            // defaultValue=""
            style={{ width: 120 }}
            onChange={(value) => onfilterChange("role",value)}
            options={[
              { value: "admin", label: "Admin" },
              { value: "customer", label: "Customer" },
              { value: "Manager", label: "manager" },
            ]}
          />
        </Flex>
      </div>
      <div style={{ width: "30%" }}>
        <Button style={{}} type="primary" htmlType="submit">
          <PlusOutlined />
          create user
        </Button>
      </div>
    </Flex>
  </div>
  )
}

export default UserFilterCard

import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Table, type TableProps } from "antd";
import { Link } from "react-router-dom";
import { getUserList } from "../http/queries";
import { useEffect, useState } from "react";

interface DataType {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  createdAt: string;
}

// const dummydata: DataType[] = [
//   {
//     key: "1",
//     username: "John Brown",
//     status: "active",
//     role: "customer",
//     email: "john@gmail.com",
//     createdAt: "4-12-2025",
//   },
//   {
//     key: "2",
//     username: "Jim Green",

//     status: "banned",
//     role: "customer",
//     email: "john@gmail.com",
//     createdAt: "4-12-2025",
//   },
//   {
//     key: "3",
//     username: "Joe Black",

//     status: "active",
//     role: "customer",
//     email: "john@gmail.com",
//     createdAt: "4-12-2025",
//   },
// ];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "firstName",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "lastName",
    key: "lastName",
    dataIndex: "lastName",
  },
  {
    title: "role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const Users = () => {



  const [userData,setUserData]=useState()

  const[page,setPage]=useState(1)
  const [perPage,setperPage]=useState(5)

 

  const {data,isLoading}=useQuery({
    queryKey:["users",{page,perPage}],
    queryFn:getUserList
  })
  
 useEffect(()=>{
  if(data){

    setUserData(data[0])
  }
 },[data])

  console.log("userslist",userData)

  return (
    <>
      <div>
        <Breadcrumb
          separator=">"
          items={[{ title: <Link to="/">Dashboard</Link> }, { title: "Users" }]}
        />
      </div>

      <div style={{marginTop:"30px"}}>
        {isLoading ? <h1>Loading... </h1> :
          <Table<DataType> columns={columns} dataSource={userData}  
          pagination={{defaultCurrent:page,defaultPageSize:perPage,total:data[1],onChange(page, pageSize) {
            setPage(page)
            setperPage(pageSize)
          },}}
           />
        }
      </div>
    </>
  );
};

export default Users;

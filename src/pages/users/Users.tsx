import { useQuery } from "@tanstack/react-query";
import {
  Breadcrumb,
  Flex,
  Table,
  type TableProps,
  Input,
  Button,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { getUserList } from "../../http/queries";
import { useEffect, useState } from "react";
import { userAuth } from "../../store";
import UserFilterCard from "./UserFilterCard";


interface DataType {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  createdAt: string;
}

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
  const { user } = userAuth();

  const [userData, setUserData] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(5);

  const [filters,setFilters]=useState({
      search:"",
      role:""
  })

  const handleFilterChange=(key:string,value:string)=>{
     setFilters((prev)=>({...prev,[key]:value}))
    }
    
  const { data, isLoading } = useQuery({
    queryKey: ["users", { page, perPage }],
    queryFn: getUserList,
  });

  useEffect(() => {
    if (data) {
      setUserData(data[0]);
    }
  }, [data]);

  if (user?.role === "manager") {
    return <Navigate to={"/"} replace={true} />;
  }

  // console.log("userslist", userData);

  return (
    <>
      <div>
        <Breadcrumb
          separator=">"
          items={[{ title: <Link to="/">Dashboard</Link> }, { title: "Users" }]}
        />
      </div>

      {/* search bar */}

      <UserFilterCard
        filters={filters}
        onfilterChange={handleFilterChange}
      />

      <div style={{ marginTop: "30px" }}>
        {isLoading ? (
          <h1>Loading... </h1>
        ) : (
          <Table<DataType>
            columns={columns}
            dataSource={userData}
            rowKey={'id'}
            pagination={{
              defaultCurrent: page,
              defaultPageSize: perPage,
              total: data[1],
              onChange(page, pageSize) {
                setPage(page);
                setperPage(pageSize);
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default Users;

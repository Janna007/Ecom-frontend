import { Outlet } from "react-router-dom";
import { getSelf } from "../http/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { userAuth } from "../store";

const getUser = async () => {
  //server call api
  const { data } = await getSelf();
  return data;
};

function Root() {
  const { setUser } = userAuth();
  //getuser
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  useEffect(() => {
    if (data) {
      console.log("data", data);
      setUser(data);
    }
  }, [data, setUser]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Root;

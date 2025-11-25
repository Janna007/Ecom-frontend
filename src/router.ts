import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/login";
import Auth from "./layout/Auth";
import HomePage from "./pages/HomePage";
import NonAuth from "./layout/NonAuth";
import Root from "./layout/Root";
import Users from "./pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        Component: Auth,
        children: [
          {
            index: true,
            Component: HomePage,
          },
          {
            path:'/users',
            Component: Users,
          },
        ],
      },
      {
        path: "auth",
        Component: NonAuth,
        children: [
          {
            path: "login",
            Component: Login,
          },
        ],
      },
    ],
  },
]);

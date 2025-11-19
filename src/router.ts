import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/login";

export const router=createBrowserRouter([
    { path: "/", Component:Login },
    {path:"/dashboard",Component:Dashboard}
])
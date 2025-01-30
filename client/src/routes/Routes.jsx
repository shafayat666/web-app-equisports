import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddEquip from "../pages/AddEquip";
import ViewEquip from "../pages/ViewEquip";
import Login from "../pages/Login";
import UserEquip from "../pages/UserEquip";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("http://localhost:5000/sports"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-equips",
        element: <AddEquip />,
      },
      {
        path: "/view-equip/:id",
        element: <ViewEquip />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user-equips",
        element: <UserEquip />,
      },
    ]
  },
]);
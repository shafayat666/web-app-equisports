import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddEquip from "../pages/AddEquip";
import AllEquip from "../pages/AllEquip";
import Login from "../pages/Login";
import UserEquip from "../pages/UserEquip";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/sports"),
      },
      {
        path: "/add-equips",
        element: <AddEquip />,
      },
      {
        path: "/all-equips",
        element: <AllEquip />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user-equips",
        element: <UserEquip />,
      },
    ]
  },
]);
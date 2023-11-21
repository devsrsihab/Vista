import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import ForgetPassword from "../Components/Auth/ForgetPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: '/register',
        element: <Signup/>
      },
      {
        path: '/forget-password',
        element: <ForgetPassword/>
      }
    ],
  },
]);

export default router;

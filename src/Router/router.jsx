import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Error from "../Pages/SharedPage/Error";
import Home from "../Pages/Home/home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<Error></Error>,
     children:[
             {
               index:true,
               Component:Home               
             }                 
     ]
},

{
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
}
]);
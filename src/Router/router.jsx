import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Error from "../Pages/SharedPage/Error";
import Home from "../Pages/Home/home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Coverage from "../Pages/map/Coverage";
import Sendparcel from "../Pages/Parcel/Sendparcel";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<Error></Error>,
     children:[
             {
               index:true,
               Component:Home               
             },
             {
              path:'/coverage',
              Component:Coverage,
              loader:()=>fetch('./warehouses.json')
             },
             {
              path:'/parcel',
              element:(<PrivateRoute>
                <Sendparcel></Sendparcel>
                </PrivateRoute>)
           // Component:Sendparcel 
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
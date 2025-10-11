import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Error from "../Pages/SharedPage/Error";
import Home from "../Pages/Home/home";

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
]);
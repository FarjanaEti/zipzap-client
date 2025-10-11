import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/SharedPage/Navbar';
import Footer from '../Pages/SharedPage/Footer';

const RootLayout = () => {
 return (
  <div>
      <Navbar></Navbar>                        
     <Outlet></Outlet> 
     <Footer></Footer>                                                                                    
 </div>
  );
};

export default RootLayout;
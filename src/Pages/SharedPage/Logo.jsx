import React from 'react';
import logo from '../../assets/assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
 return (
   <Link to='/'>
     <div className='flex items-end'>
       <img className='mb-2' src={logo} alt="" />  
       <p className= '-ml-2 font-extrabold text-3xl'>ZipZap</p>                                                                                 
    </div>
    </Link>
 );
};

export default Logo;
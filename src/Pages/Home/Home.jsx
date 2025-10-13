import React from 'react';
import Banner from './Banner';
import Services from './Services/Services';
import ClientLogo from './ClientLogo/ClientLogo';

const Home = () => {
   return (
        <div>
           <Banner></Banner>  
           <Services></Services> 
           <ClientLogo></ClientLogo>                                                                          
        </div>
 );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Services from './Services/Services';
import ClientLogo from './ClientLogo/ClientLogo';
import KeyFeatures from './Feature/KeyFeatures';
import BeMarchent from './Marchent/BeMarchent';

const Home = () => {
   return (
        <div>
           <Banner></Banner>  
           <Services></Services> 
           <ClientLogo></ClientLogo>   
           <KeyFeatures></KeyFeatures>
           <BeMarchent></BeMarchent>                                                                       
        </div>
 );
};

export default Home;
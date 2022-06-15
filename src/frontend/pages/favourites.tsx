
import HeaderWithLogo from '@components/favourites/TabSwitch';
import { NextPage } from 'next';
import React from 'react';
import Sidebar from '@components/global/Sidebar';
import Navbar from '@components/global/DefaultNavbar';
import TabSwitch from '@components/favourites/TabSwitch';


const Favourites : NextPage = () =>{



    return <>
        
        <div className="h-screen bg-landing-page bg-cover">
            <div className="flex flex-col h-screen bg-gray-600 bg-opacity-70">
                <Navbar />
                
                
                <TabSwitch />
                

            </div>
        </div>
    </>
}


export default Favourites;
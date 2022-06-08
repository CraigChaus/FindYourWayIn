
import HeaderWithLogo from '@components/favourites/HeaderWithLogo';
import { NextPage } from 'next';
import React from 'react';
import Sidebar from '@components/global/Sidebar';
import Navbar from '@components/global/DefaultNavbar';
import LogoNoText from 'public/logo_without_text.png'

const Favourites : NextPage = () =>{



    return <>
        
        <div className="flex flex-col h-screen bg-landing-page bg-cover">
            <div className="flex flex-col h-screen bg-gray-600 bg-opacity-70">
            <Navbar />
                {/* <div
                    className=" top-0 flex flex-row justify-between bg-green-500 h-18"
                >
                    <Sidebar/>
                    
                    <div className="aspect-square h-full bg-[url('../public/logo_without_text.png')]"/>

                </div> */}
            </div>
        </div>
    </>
}


export default Favourites;
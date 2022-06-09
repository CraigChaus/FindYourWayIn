
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

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                </li>
                <li>
                    <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                </li>
            </ul>
        </div>

            </div>
        </div>
    </>
}


export default Favourites;
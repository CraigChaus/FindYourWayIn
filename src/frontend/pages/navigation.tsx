import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Navigation: NextPage = () => {

    return (
        <div  className="flex flex-col h-screen border-black border-4 bg-gray-900">
            <div id="header" className="flex justify-start h-16 bg-gray-400 border-blue-500 border-2  rounded-b-2xl ">
                <button  className="justify-start h-12 w-12  hover:bg-gray-500 text-black font-bold border-black  rounded m-2"
            > <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
            </div>

            <div id="main" className="h-full  bg-gray-200 border-red-900 border-2">

                MAP


            </div>

        </div>
    )
}

export default Navigation
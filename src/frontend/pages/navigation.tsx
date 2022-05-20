import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Navigation: NextPage = () => {

    return (
        <div  className="flex  flex-col h-screen border-black border-4 bg-gray-900">
            <div id="header" className="flex justify-start h-16 bg-zinc-100 rounded-b-2xl z-20">
                <button  className=" h-12 w-12  hover:bg-gray-400 text-black font-bold border-black  rounded m-2"
            > <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
           <input className=" h-10 w-full mx-4 my-3 rounded-md border-black border-2 text-lg"/>
            </div>
            <div className="flex justify-center  w-full absolute top-16 z-10 "><button  className="relative flex justify-center bg-cyan-400  h-6 w-12  hover:bg-cyan-500 text-black font-bold  rounded-b-full"
            > <svg className="relative w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> </button></div>


            <div id="main" className="h-full  bg-black text-white">

                MAP


            </div>

        </div>
    )
}

export default Navigation
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Navigation: NextPage = () => {

    return (
        <div  className="h-screen border-black border-4 bg-gray-900">
            <div id="header" className="h-1/6 bg-gray-400 border-blue-500 border-2 mx-4 rounded-lg">Header</div>

            <div id="main" className="h-5/6   bg-gray-200 border-red-900 border-2">

                MAP


            </div>

        </div>
    )
}

export default Navigation
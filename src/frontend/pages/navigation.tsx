import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Navigation: NextPage = () => {

    return (
        <div  className="h-full ">
            <div id="header" className="p-4 bg-gray-400 ">Header</div>

            <div id="main" className="h-1/2 max-h-full p-4 sm:h-full  bg-gray-200 ">

                Content
                <div>                Content
                </div>

            </div>

        </div>
    )
}

export default Navigation
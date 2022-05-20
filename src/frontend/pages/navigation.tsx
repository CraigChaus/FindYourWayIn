
import { Fragment } from "react";
import type { NextPage } from 'next'

import Header from "../components/navigation/Header";
import Categories from "../components/navigation/Categories";
import SectionForMap from "../components/navigation/SectionForMap";


const Navigation: NextPage = () => {

    return (

            <div  className="flex  flex-col h-screen border-black border-4 bg-gray-900">
                   <Header/>
                   <Categories/>
                   <SectionForMap/>

            </div>

    )
}

export default Navigation


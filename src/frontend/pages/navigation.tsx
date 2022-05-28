
import { Fragment } from "react";
import type { NextPage } from 'next'

import Navbar from "../components/navigation/Navbar";
import SectionForMap from "../components/navigation/SectionForMap";


const Navigation: NextPage = () => {

    return (
        <div  className="flex flex-col h-screen ">
            <Navbar/>
            <SectionForMap/>
        </div>
    )
}

export default Navigation


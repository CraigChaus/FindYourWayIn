import type { NextPage } from 'next'

import Navbar from "../components/navigation/Navbar";
import HomePage from "./home";


const Navigation: NextPage = () => {

    return (
        <div  className="flex flex-col h-screen ">
            <Navbar/>
            <HomePage/>
        </div>
    )
}

export default Navigation


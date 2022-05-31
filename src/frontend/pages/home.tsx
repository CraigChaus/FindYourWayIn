import type { NextPage } from 'next'

import Navbar from "../components/map-navbar/MapNavbar";
import HomePage from "../components/homepage/HomePage";


const Home: NextPage = () => {

    return (
        <div className="flex flex-col h-screen ">
            <Navbar/>
            <HomePage/>
        </div>
    )
}

export default Home


import type { NextPage } from 'next'

import Navbar from "../components/navigation/NavigationNavbar";
import HomePage from "../components/HomePage";


const Home: NextPage = () => {

    return (
        <div className="flex flex-col h-screen ">
            <Navbar/>
            <HomePage/>
        </div>
    )
}

export default Home


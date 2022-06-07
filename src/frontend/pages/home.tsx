import type { NextPage } from 'next';

import Navbar from '../components/map-navbar/MapNavbar';
import HomePage from '../components/homepage/HomePage';
import BottomSlider from '@components/global/bottom-slider/BottomSlider';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <HomePage />
            {/* <BottomSlider/> */}
        </div>
    );
};

export default Home;

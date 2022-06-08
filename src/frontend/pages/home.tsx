import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import Navbar from '../components/map-navbar/MapNavbar';
import HomePage from '../components/homepage/HomePage';
import BottomSlider from '@components/global/bottom-slider/BottomSlider';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const getServerSideProps = async () => {
    const res = await fetch(`${apiUrl}/locations`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();
    const locations = data.results;
    
    return { props: { data: locations } };
}

const Home: NextPage = ({ data }: any) => {
    return (
        <div className="flex flex-col h-screen">
            <HomePage locations={data} />
            {/* <BottomSlider/> */}
        </div>
    );
};

export default Home;

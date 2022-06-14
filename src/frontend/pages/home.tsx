import type {
    GetServerSideProps,
    NextPage,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomePage from '../components/homepage/HomePage';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const getServerSideProps = async ({ locale }: any) => {
    const res = await fetch(`${apiUrl}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();
    const locations = data.results;

    return { props: {
         data: locations,
         ...await serverSideTranslations(locale, ['common']),

        } 
    };
};

const Home: NextPage = ({ data }: any) => {
    return (
        <div className="flex flex-col h-screen">
            <HomePage locations={data} />
        </div>
    );
};

export default Home;

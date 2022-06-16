import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import HomePage from '../components/homepage/HomePage';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const getServerSideProps = async ({ locale }: any) => {
    const res1 = await fetch(`${apiUrl}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data1 = await res1.json();
    const hits = data1.hits;

    const res2 = await fetch(`${apiUrl}/locations?size=${hits}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
     
    const data = await res2.json();

    return {
        props: {
            data: data.results,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

const Home: NextPage = ({ data }: any) => {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HomePage locations={data} />
        </div>
    );
};

export default Home;

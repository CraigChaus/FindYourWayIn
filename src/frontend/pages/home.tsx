import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import HomePage from '../components/homepage/HomePage';

export const getServerSideProps = async ({ locale }: any) => {
    const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
        },
    });
    const data1 = await res1.json();
    const hits = data1.hits;

    const res2 = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/locations?size=${hits}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
            },
        },
    );
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
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <HomePage locations={data} />
        </div>
    );
};

export default Home;

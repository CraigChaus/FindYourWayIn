import Head from 'next/head';
import React from 'react';
import DiscoveryComponent from '../components/discovery/DiscoveryComponent';

const Discovery = () => {
    return (
        <>
            <Head>
                <title>Find Your Way In</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <DiscoveryComponent />
        </>
    );
};

export default Discovery;

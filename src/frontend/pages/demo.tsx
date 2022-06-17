import React from 'react';
import Dropdown from '../components/global/user/Dropdown';
import categories from '../CategorizationOntology-TheFeedFactory.json';

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

    return {
        props: {
            data: locations,
        },
    };
};

export default function Demo({ data }: any): JSX.Element {
    console.log(categories.categorizations);
    return (
        <>
            <Dropdown />
        </>
    );
}

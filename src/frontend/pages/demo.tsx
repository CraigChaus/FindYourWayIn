import React from 'react';
import Dropdown from '../components/global/user/Dropdown';
import categories from '../CategorizationOntology-TheFeedFactory.json';
import { categoriesRes } from '@utils/filter';

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const getServerSideProps = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/locations?size=34`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
            },
        },
    );
    const data = await res.json();
    const locations = data.results;

    return {
        props: {
            data: locations,
        },
    };
};

export default function Demo({ data }: any): JSX.Element {
    console.log(categoriesRes);
    return (
        <>
            <Dropdown />
        </>
    );
}

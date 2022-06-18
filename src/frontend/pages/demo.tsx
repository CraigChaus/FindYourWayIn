import React from 'react';
import Dropdown from '../components/global/user/Dropdown';
import categories from '../CategorizationOntology-TheFeedFactory.json';
import { allLocations } from '@utils/filter';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const getServerSideProps = async () => {
    const res = await fetch(`${apiUrl}/locations?size=34`, {
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
    console.log(allLocations);
    const results = new Set();
    const resultsArray = [];
    const categoriesRes = new Set();
    data.map((location: any) => {
        location.trcItemCategories.types.map((type: any) => {
            const result = type?.catid;
            results.add(result);
            resultsArray.push(result);
        });
    });
    // console.log(resultsArray)

    results.forEach((el: any) => {
        for (let i = 0; i < categories.categorizations.length; i++) {
            const categoryChild = categories.categorizations[i].child;
            // console.log(categoryChild);
            if (categoryChild === undefined) continue;
            for (let j = 0; j < categoryChild.length; j++) {
                if (el === categoryChild[j].cnetID) {
                    categoriesRes.add(categories.categorizations[i].cnetID);
                }
            }
        }
    });

    console.log(categoriesRes);

    categoriesRes.forEach((el: any) => {
        for (let i = 0; i < categories.categorizations.length; i++) {
            el === categories.categorizations[i].cnetID
                ? console.log(categories.categorizations[i].categorization)
                : null;
        }
    });

    return (
        <>
            <Dropdown />
        </>
    );
}

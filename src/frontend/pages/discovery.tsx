import React from 'react';
import DiscoveryComponent from '../components/discovery/DiscoveryComponent';
import broken from '../public/images/broken.png';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type DiscoveryProp = {
    id: any;
    imageSRC: any;
    imageAlt: any;
    locationName: any;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

//these variables are for the location image and location name data checking stage
let locImage: any = '';
let locName: any = ' ';

export async function getStaticProps({ locale }: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
        },
    });
    const data = await res.json();

    return {
        props: {
            data: data,
            ...(await serverSideTranslations(locale, ['common'])),

        },
    };
}

export const Discovery = ({ data }: any): JSX.Element => {
    const [locationData, setLocationData] = React.useState<
        DiscoveryProp[] | null
    >(null);

    const [spotLightId, setSpotLightId] = React.useState(null);
    const [spotLightName, setSpotLightName] = React.useState<any>(null);
    const [spotLightImage, setSpotLightImage] = React.useState<any>(null);
    const [spotLightImageAlt, setSpotLightImageAlt] = React.useState<any>(null);

    React.useEffect(() => {
        const resultLocation = [];

        const total = data.results.length;
        console.log(total);

        for (let i = 0; i < data.results.length; i++) {
            //data checking stage
            if (data.results[i]?.files[0]?.hlink == null) {
                locImage = broken;
            } else {
                locImage = data.results[i]?.files[0]?.hlink;
            }

            if (data.results[i]?.trcItemDetails[0]?.title == '') {
                locName = 'Under Construction';
            } else {
                locName = data.results[i]?.trcItemDetails[0]?.title;
            }

            resultLocation.push({
                id: data.results[i]?.id,
                imageSRC: locImage,
                imageAlt: 'alt',
                locationName: locName,
            });
        }

        //This is the random index number generator based on total number of array elements
        const spotLightPicker =
            (Math.floor(Math.random() * 10) % (total ?? 0)) + (total ? 0 : 0);

        if (data.results[spotLightPicker]?.trcItemDetails[0]?.title == '') {
            setSpotLightName('Under Construction');
        } else {
            setSpotLightName(
                data.results[spotLightPicker]?.trcItemDetails[0]?.title,
            );
        }

        if (data.results[spotLightPicker]?.files[0]?.hlink == null) {
            setSpotLightImage(broken);
        } else {
            setSpotLightImage(data.results[spotLightPicker]?.files[0]?.hlink);
        }

        setSpotLightId(data.results[spotLightPicker].id);
        setSpotLightImageAlt('alt');

        setLocationData(resultLocation);
    }, [data]);

    return (
        <>
            <Head>
                <title>Find Your Way In</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <DiscoveryComponent
                locationData={locationData}
                spotName={spotLightName}
                spotImage={spotLightImage}
                spotID={spotLightId}
                spotImageAlt={spotLightImageAlt}
            />
        </>
    );
};

export default Discovery;

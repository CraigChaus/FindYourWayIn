import React from 'react';
import DiscoveryComponent from '../components/discovery/DiscoveryComponent';

type DiscoveryProp = {
    id: any;
    imageSRC: any;
    imageAlt: any;
    locationName: any;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export async function getStaticProps() {
    const res = await fetch(`${apiUrl}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
}

export const Discovery = ({ data }: any): JSX.Element => {
    const [locationData, setLocationData] = React.useState<
        DiscoveryProp[] | null
    >(null);

    const [spotLightId, setSpotLightId] = React.useState(null);
    const [spotLightName, setSpotLightName] = React.useState(null);
    const [spotLightImage, setSpotLightImage] = React.useState(null);
    const [spotLightImageAlt, setSpotLightImageAlt] = React.useState<any>(null);

    React.useEffect(() => {
        const resultLocation = [];

        const total = data.results.length;
        console.log(total);

        for (let i = 0; i < data.results.length; i++) {
            resultLocation.push({
                id: data.results[i]?.id,
                imageSRC: data.results[i]?.files[0]?.hlink,
                imageAlt: 'alt',
                locationName: data.results[i]?.location?.label,
            });
        }

        //This is the random index number generator based on total number of array elements
        const spotLightPicker =
            (Math.floor(Math.random() * 10) % (total ?? 0)) + (total ? 0 : 0);

        setSpotLightName(data.results[spotLightPicker].location?.label);

        setSpotLightImage(data.results[spotLightPicker]?.files[0]?.hlink);

        setSpotLightId(data.results[spotLightPicker].id);
        setSpotLightImageAlt('alt');

        setLocationData(resultLocation);
    }, [data]);

    return (
        <DiscoveryComponent
            locationData={locationData}
            spotName={spotLightName}
            spotImage={spotLightImage}
            spotID={spotLightId}
            spotImageAlt={spotLightImageAlt}
        />
    );
};

export default Discovery;

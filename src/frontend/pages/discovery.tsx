import { Data } from '@react-google-maps/api';
import React from 'react';
import DiscoveryComponent from '../components/discovery/DiscoveryComponent';

type DiscoveryProp = {
    id:any;
    imageSRC: any;
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

export const Discovery = ({data}:any): JSX.Element => {
    // const router = useRouter();
    console.log(data);

    const [locationData, setLocationData] = React.useState< DiscoveryProp[] | null>(null);

    const [spotLightId,setSpotLightId] = React.useState(null);
    const [spotLightName, setSpotLightName] = React.useState(null);
    const [spotLightImage, setSpotLightImage] = React.useState(null);

    React.useEffect(() => {
        const resultLocation = [];

        const total = (data.results.length);

        for (let i = 0; i < data.results.length; i++) {
            resultLocation.push({
                id: data.results[i].id,
                imageSRC: data.results[i].files[0]?.hlink,
                locationName: data.results[i].location?.label,
            });

        }

        let spotLightPicker = Math.floor(Math.random() * 10) % (total ?? 0) + (total ? 0 : 0);
        console.log(spotLightPicker);

        setSpotLightName(data.results[spotLightPicker].location?.label)
        setSpotLightImage(data.results[spotLightPicker].files[0]?.hlink)
        setSpotLightId(data.results[spotLightPicker].id)
               
        setLocationData(resultLocation);
    },[data]);

    return <DiscoveryComponent locationData={locationData} 
                               spotLightName = {spotLightName}
                               spotLightImage = {spotLightImage}
                               spotLightID = {spotLightId} />;
};

export default Discovery;

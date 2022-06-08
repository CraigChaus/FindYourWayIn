import React, { useEffect, useState } from 'react';
import ImageContainer from './ImageContainer';
import RoutingButton from './RoutingButton';
import InfoButton from './InfoButton';
import Body from './Body';
import { useRouter } from 'next/router';
import brokenImage from '../../../public/images/broken.png';

const BottomSlider = ({ id, header, description, image }: any): JSX.Element => {
    const router = useRouter();
    // const [locationTitle, setLocationTitle] = useState('');
    // const [locationShortDesc, setlocationShortDesc] = useState('');

    // useEffect(() => {
    //     setLocationTitle(allLocations[0].name);
    //     setlocationShortDesc(allLocations[0].shortDescription);
    //     console.log('LOCATION INFO FOR BOTTOM SLIDER');
    //     console.log(allLocations[0].name);
    //     console.log(allLocations[0].shortDescription);
    // }, []);
    useEffect(() => {
        return () => {
            console.log('unmounting');
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 w-full rounded-t-lg shadow-bottom-slider bg-slate-100">
            <ImageContainer src={image ? image : brokenImage } alt="background" />
            <Body header={header} description={description} />
            <div className="flex justify-around">
                <RoutingButton />
                <InfoButton onClick={() => router.push(`description/${id}`)} />
            </div>
        </div>
    );
};

export default BottomSlider;

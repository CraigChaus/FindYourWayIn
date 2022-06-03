import React, { useEffect, useState } from 'react';
import ImageContainer from './ImageContainer';
import RoutingButton from './RoutingButton';
import InfoButton from './InfoButton';
import Body from './Body';
import Background from '../../../public/images/background.jpg';
import { allLocations } from 'API/api';
import { allowedNodeEnvironmentFlags } from 'process';


const BottomSlider = (): JSX.Element => {

    const [locationTitle, setLocationTitle] = useState("")
    const [locationShortDesc, setlocationShortDesc] = useState("")

    useEffect(() => {
        setLocationTitle(allLocations[0].name)
        setlocationShortDesc(allLocations[0].shortDescription)
        console.log("LOCATION INFO FOR BOTTOM SLIDER")
        console.log(allLocations[0].name)
        console.log(allLocations[0].shortDescription)
    }, [allLocations]
    )


    return (
        <div className='absolute bottom-0 left-0 right-0 w-full rounded-t-lg shadow-bottom-slider bg-slate-100 max-h'>
            <ImageContainer 
                src={Background}
                alt="background"
            />
            <Body 
                header= {locationTitle}
                description={locationShortDesc}
            />
            <div className='flex justify-around'>
                <RoutingButton />
                <InfoButton />
            </div>
        </div>
    )
}

export default BottomSlider;
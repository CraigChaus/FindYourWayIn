import React from 'react';
import ImageContainer from './ImageContainer';
import RoutingButton from './RoutingButton';
import InfoButton from './InfoButton';
import Body from './Body';
import Background from '../../../public/images/background.jpg';


const BottomSlider = (): JSX.Element => {
    return (
        <div className='absolute bottom-0 left-0 right-0 w-full rounded-t-lg shadow-bottom-slider bg-slate-100 max-h'>
            <ImageContainer 
                src={Background}
                alt="background"
            />
            <Body 
                header="Header"
                description="Description"
            />
            <div className='flex justify-around'>
                <RoutingButton />
                <InfoButton />
            </div>
        </div>
    )
}

export default BottomSlider;
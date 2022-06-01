import React from 'react';
import ImageContainer from './ImageContainer';
import RoutingButton from './RoutingButton';
import InfoButton from './InfoButton';
import Body from './Body';
import Background from '../../../public/images/background.jpg';


const BottomSlider = (): JSX.Element => {
    return (
        <div className='absolute bottom-0 left-0 right-0 w-full shadow-xl h-2/5 bg-slate-50'>
            <ImageContainer 
                src={Background}
                alt="background"
            />
            <Body />
            <div className='flex flex-row justify-around'>
                <RoutingButton />
                <InfoButton />
            </div>
        </div>
    )
}

export default BottomSlider;
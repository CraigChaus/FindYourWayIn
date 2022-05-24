import React from 'react';

export default function LocationMarker(props: { setIsLocation: (arg0: any) => void; isLocation: boolean; }) {
    return (
        <button 
            onClick={() => props.setIsLocation(!props.isLocation) } 
            className="absolute text-blue-800 z-10 bottom-20 right-5 p-0.5 border-2 border-blue-800 font-bold"
        >
            Get Device Location
        </button>
    )

}
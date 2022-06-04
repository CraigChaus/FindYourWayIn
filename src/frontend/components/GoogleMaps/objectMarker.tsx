import { type } from 'os';
import React, { useState } from 'react';

export const ObjectMarker = (props: any) => {
    let objectIcon = '';
    const category = props.category;

    switch (category) {
        case 'shop':
            objectIcon = 'shopIconURL';
            break;

        case 'cafe':
            objectIcon = 'cafeIconURL';
            break;

        case 'culture':
            objectIcon = 'cultureIconURL';
            break;

        case 'sport':
            objectIcon = 'sportIconURL';
            break;

        default:
            objectIcon = '';
    }

    new google.maps.Marker({
        position: { lat: props.objectMarkerLat, lng: props.objectMarkerLng },
        map: props.map,
        icon: objectIcon,
    });

    return null;
};

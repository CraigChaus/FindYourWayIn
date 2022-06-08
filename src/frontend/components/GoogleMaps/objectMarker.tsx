import { type } from 'os';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as icons from 'public/markerIcons';

interface MarkerProp extends google.maps.MarkerOptions {
    options?: google.maps.MarkerOptions | null;
    category: string;
    id: string;
}

export const ObjectMarker = ({ category, id, ...options }: MarkerProp) => {
    const router = useRouter();
    const [marker, setMarker] = useState<google.maps.Marker>();
    const [locationId, setLocationId] = useState<string>('');

    React.useEffect(() => {
        setLocationId(id);
    }, [id]);

    let objectIcon = '';
    let icon_color = '';

    switch (category) {
        case 'Shop':
            objectIcon = icons.shop;
            icon_color = 'red';
            break;

        case 'Eat/Drink':
            objectIcon = icons.eat_drink;
            icon_color = 'yellow';
            break;

        case 'Culture':
            objectIcon = icons.culture;
            icon_color = 'purple';
            break;

        case 'Sport':
            objectIcon = icons.sports;
            icon_color = 'orange';
            break;

        default:
            objectIcon = '';
    }

    React.useEffect(() => {
        const svgMarker = {
            path: objectIcon,
            fillColor: icon_color,
            fillOpacity: 0.6,
            scale: 0.7,
        };
        if (!marker) {
            setMarker(
                new google.maps.Marker({
                    ...options,
                    icon: svgMarker,
                }),
            );
        }
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [icon_color, marker, objectIcon, options]);

    React.useEffect(() => {
        options && marker?.setOptions(options);
    }, [marker, options]);

    marker?.addListener('click', () => {
        router.push(`/home?id=${locationId}`);
    });
    return null;
};

//M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z

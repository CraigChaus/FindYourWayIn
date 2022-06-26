import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as icons from 'public/markerIcons';
import { categoriesRes } from '@utils/filter';
import categories from '../../CategorizationOntology-TheFeedFactory.json';

interface MarkerProp extends google.maps.MarkerOptions {
    options?: google.maps.MarkerOptions | null;
    category: string;
    id: string;
}

export const categoryList = new Set();
export const ObjectMarker = ({ category, id, ...options }: MarkerProp) => {
    categoriesRes.forEach((catID: any) => {
        const cat = categories.categorizations.find(
            (cat: any) => cat.cnetID === catID,
        );
        if (cat) {
            categoryList.add(cat);
        }
    });
    const router = useRouter();
    const [marker, setMarker] = useState<google.maps.Marker>();
    const [locationId, setLocationId] = useState<string>('');

    React.useEffect(() => {
        setLocationId(id);
    }, [id]);

    let objectIcon = '';
    let icon_color = '';
    let categoryName = '';

    categoryList.forEach((cat: any) => {
        cat.child.forEach((child: any) => {
            if (child.cnetID === category) {
                categoryName = cat.categorization;
            }
        });
    });

    const getIcon = (category: string) => {
        if (category === 'Kleine horeca' || category === 'Restaurants') {
            objectIcon = icons.eat_drink;
            icon_color = 'yellow';
        } else if (category === 'Winkels') {
            objectIcon = icons.shop;
            icon_color = 'red';
        } else if (category === 'Attracties') {
            objectIcon = icons.attraction;
            icon_color = 'blue';
        } else if (
            category === 'Groepsarrangementen en activiteiten' ||
            category === 'Evenementen'
        ) {
            objectIcon = icons.activity;
            icon_color = 'orange';
        } else if (category === 'Bezienswaardigheden') {
            objectIcon = icons.landscape;
            icon_color = 'green';
        } else if (category === 'Uitgaan') {
            objectIcon = icons.comedy;
            icon_color = 'purple';
        }
    };

    React.useEffect(() => {
        getIcon(categoryName);
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
    }, [categoryName, icon_color, marker, objectIcon, options]);

    React.useEffect(() => {
        options && marker?.setOptions(options);
    }, [marker, options]);

    marker?.addListener('click', () => {
        router.push(`/home?id=${locationId}`);
    });
    return null;
};

import ActivityZone from '../../public/icons/activity_zone.svg';
import Entertainment from '../../public/icons/theater_comedy.svg';
import Shop from '../../public/icons/shopping-40.svg';
import Landscape from '../../public/icons/landscape.svg';
import Attraction from '../../public/icons/attractions.svg';
import Restaurant from '../../public/icons/restaurant-40.svg';
import { mount } from 'cypress/react';
import Category from '../../components/map-navbar/Categories';

const categories = [
    {
        key: 'Shop',
        value: {
            iconName: 'shop',
            icon: (
                <Shop className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
    {
        key: 'Eat/Drink',
        value: {
            iconName: 'eat',
            icon: (
                <Restaurant className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
    {
        key: 'Activity zone',
        value: {
            iconName: 'activity',
            icon: (
                <ActivityZone className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
    {
        key: 'Entertainment',
        value: {
            iconName: 'entertainment',
            icon: (
                <Entertainment className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
    {
        key: 'Landscape',
        value: {
            iconName: 'landscape',
            icon: (
                <Landscape className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
    {
        key: 'Attraction',
        value: {
            iconName: 'attraction',
            icon: (
                <Attraction className="flex justify-center fill-green-800 stroke-green-800" />
            ),
        },
    },
];

describe('Category', () => {
    it('mounts', () => {
        mount(<Category categories={categories} />);
    });
});
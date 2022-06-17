import * as React from 'react';
import { ObjectMarker } from '@components/GoogleMaps/objectMarker';
import { mount } from '@cypress/react';

describe('Test Object Marker', () => {
    beforeEach(() => {
        cy.visit('/home');
    });

    it('should render correctly', () => {
        mount(<ObjectMarker />);
        
    }
}
import { mount } from 'cypress/react';
import Footer from '../../components/global/Footer';

describe('<Footer>', () => {
    beforeEach(() => {
        mount(<Footer />);
    });

    it('renders copyright', () => {
        cy.get('[data-testid="copyright"]').should('exist');
    });
});


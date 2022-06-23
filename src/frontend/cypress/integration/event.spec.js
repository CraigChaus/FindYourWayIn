/// <reference types="Cypress"/>
describe('Seeing all components in events page', () => {
    it('Header is present', () => {
        cy.visit('/events');
        cy.get('h1').should('exist').contains('Events');
    });

    it('This month tab is present', () => {
        cy.visit('/events');
        cy.get('[data-cy=toggleTab').contains('This month').should('exist');
    });

    it('Upcoming month tab is present', () => {
        cy.visit('/events');
        cy.get('[data-cy=toggleTab').contains('Upcoming').should('exist');
    });

    it('Clicking on an event routes to details page', () => {
        cy.visit('/events');
        cy.get('[data-cy=toggleTab')
            .contains('Upcoming')
            .should('exist')
            .click();
        cy.get('div').contains('Dickens Festijn').click();
        cy.url().should(
            'eq',
            'http://localhost:3000/events/620bc8cf17632a654027749d',
        );
    });
});

describe('Seeing all components in event details page', () => {
    beforeEach(() => {
        cy.visit('/events/620bc8cf17632a654027749d');
    });
    
    it('Image should be present', () => {
        cy.get('img').should('exist');
    });

    it('Title should be present', () => {
        cy.get('h1').should('exist');
    });

    it('Location should exist', () => {
        cy.get('label').contains('Location').should('exist');
    });

    it('Schedule should exist', () => {
        cy.get('#schedule').should('exist');
    });

    it('Time should exist', () => {
        cy.get('.time').should('exist');
    });

    it('Descriptions header should exist', () => {
        cy.get('h1').contains('Description').should('exist');
    });

    it('Description content exists', () => {
        cy.get('#description_content').should('exist');
    });

    it('Website exists', () => {
        cy.get('#website').should('exist');
    });
});

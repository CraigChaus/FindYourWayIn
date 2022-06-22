/// <reference types="Cypress"/>
describe('Seeing all components in descriptions page', () => {
    beforeEach(() => {
        cy.visit('/description/627e41818b779766af333dad');
    })
    
    it('Header exists', () => {
        cy.get('h1').should('exist');
    });

    it('Image exists', () => {
        cy.get('img').should('exist');
    });

    it('Description content exists', () => {
        cy.get('#description_content').should('exist');
    });

    it('Schedule content exists', () => {
        cy.get('#schedule').should('exist');
    });

    it('Contact content exists', () => {
        cy.get('#contact_details').should('exist');
    });
});

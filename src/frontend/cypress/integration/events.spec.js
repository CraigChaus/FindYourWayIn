/// <reference types="Cypress" />
describe('Seeing all components in events page',() =>{
    it('Header is present', ()=>{
        cy.visit('/events');
        cy.get('h1').should('exist')
                    .contains('Events');
    })

    it('This month tab is present', ()=>{
        cy.visit('/events');
        cy.get('[data-cy=toggleTab').contains('This month')
                                    .should('exist');
    })

    it('Upcoming month tab is present', ()=>{
        cy.visit('/events');
        cy.get('[data-cy=toggleTab').contains('Upcoming')
                                    .should('exist');
    })
});


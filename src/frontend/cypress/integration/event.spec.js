/// <reference types="Cypress"/>
describe('Seeing all components in events page',() =>{
    it('Header is present', ()=>{
        cy.visit('/events');
        cy.get('h1')
        .should('exist')
        .contains('Events');
    })

    it('This month tab is present', ()=>{
        cy.visit('/events');
        cy.get('[data-cy=toggleTab')
        .contains('This month')
        .should('exist');
    })

    it('Upcoming month tab is present', ()=>{
        cy.visit('/events');
        cy.get('[data-cy=toggleTab')
        .contains('Upcoming')
        .should('exist');
    })
    
    it('Clicking on an event routes to details page', ()=>{
        cy.visit('/events');
        cy.get('[data-cy=toggleTab')
        .contains('Upcoming')
        .should('exist')
        .click()
        cy.get('div').contains('Dickens Festijn')
        .click()
        cy.url()
        .should('eq','http://localhost:3000/events/620bc8cf17632a654027749d')
    })
});

describe('Seeing all components in event details page',() =>{
    
    it('Image should be present', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('img')
        .should('exist');
    })

    it('Title should be present', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('h1')
        .should('exist');
    })

    it('Location should exist', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('label')
        .contains('Location')
        .should('exist');
    })

    it('Schedule should exist', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('#schedule')
        .should('exist');
    })
   
    it('Time should exist', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('.time')
        .should('exist');
    })

    it('Descriptions header should exist', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('h1')
        .contains('Description')
        .should('exist');
    })

    it('Description content exists', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('#description_content')
        .should('exist');
    })

    it('Website exists', ()=>{
        cy.visit('/events/620bc8cf17632a654027749d');
        cy.get('#website')
        .should('exist');
    })
});


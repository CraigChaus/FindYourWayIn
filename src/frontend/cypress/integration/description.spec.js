/// <reference types="Cypress"/>
describe('Seeing all components in descriptions page',() =>{
    it('Header exists', ()=>{
        cy.visit('/description/627e41818b779766af333dad');
        cy.get('h1')
        .should('exist');
    })

    it('Image exists', ()=>{
        cy.visit('/description/627e41818b779766af333dad');
        cy.get('img')
        .should('exist');
    })

    it('Description content exists', ()=>{
        cy.visit('/description/627e41818b779766af333dad');
        cy.get('#description_content')
        .should('exist');
    })

    it('Schedule content exists', ()=>{
        cy.visit('/description/627e41818b779766af333dad');
        cy.get('#schedule')
        .should('exist');
    })

    it('Contact content exists', ()=>{
        cy.visit('/description/627e41818b779766af333dad');
        cy.get('#contact_details')
        .should('exist');
    })
});
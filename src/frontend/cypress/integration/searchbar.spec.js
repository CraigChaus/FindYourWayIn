/// <reference types="Cypress" />
describe('type in to search bar', ()=>{
    it("search bar should exist",()=>{
        cy.visit("http://localhost:3000/home");
        cy.get('input[placeholder="Search a place"]')
        .should('exist');
    })

     it("type in search bar",()=>{
        cy.get('input[placeholder="Search a place"]')
        .type("Speel")
        .type('{enter}')
    })

     it("result appears",()=>{
        cy.get('div')
        .contains("Speel je Wijs")
        .should("exist")
    })

    // TODO: Click on the element 

    // Check if the div with the location description paragraph exists

    


})
// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />
context('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/home');
    });
    
    it('should have a title', () => {
        cy.title().should('equal', 'Home')
    });
    
    it('should have a navigation bar', () => {
        cy.get('h1').contains('FYWI Walstraat')
    });
    
    it('should have a link to the about page', () => {
        cy.get('a').contains('Continue without login')
    });

    it('should have a link to the login page', () => {
        cy.get('button').contains('Login');
    })

    it('should have a link to the register page', () => {
        cy.get('button').contains('Sign up');
    });

    it('should have a footer', () => {
        cy.get('footer')
    });
})

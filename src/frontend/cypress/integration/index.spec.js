// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />
context('Index Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    
    it('should have a title', () => {
        cy.title().should('equal', 'Find Your Way In')
    });
    
    it('should have a navigation bar', () => {
        cy.get('h1').contains('FYWI Walstraat')
    });

    it('should have a language selector', () => {
        cy.get('select').contains('Language')
    });
    
    it('should have a link to the about page', () => {
        cy.get('a').contains('Continue without login').click();
        cy.url().should('include', '/home');

    });

    it('should have a link to the login page', () => {
        cy.get('button').contains('Login').click();
        cy.url().should('include', '/login');
    })

    it('should have a link to the register page', () => {
        cy.get('button').contains('Sign up').click();
        cy.url().should('include', '/signup');
    });

    it('should have a footer', () => {
        cy.get('footer')
    });
})

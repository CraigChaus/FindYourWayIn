// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />
context('Index Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('should have a title', () => {
        cy.title().should('equal', 'Find Your Way In')
    });
    
    it('should have a navigation bar', () => {
        cy.get('h1').contains('FYWI Walstraat')
    });

    it('should have a language selector', () => {
        cy.get('button').first().click()
        cy.get('a').contains('English');
        cy.get('a').contains('Dutch');
        cy.get('a').contains('Chinese');
        cy.get('a').contains('German');
    });

    it('change to Nederlands', () => {
        cy.get('button').first().click()
        cy.get('a').contains('Dutch').click()
        cy.url().should('eq','http://localhost:3000/nl')
    });
    
    it('change to Chinese', () => {
        cy.get('button').first().click()
        cy.get('a').contains('Chinese').click()
        cy.url().should('eq','http://localhost:3000/zh')
    })
    
    it('change to German', () => {
        cy.get('button').first().click()
        cy.get('a').contains('German').click()
        cy.url().should('eq','http://localhost:3000/de')
    })

    it('change to English', () => {
        cy.get('button').first().click()
        cy.get('a').contains('English').click()
        cy.url().should('eq','http://localhost:3000/')
    })
    
    it('check continue without login link', () => {
        cy.get('[data-cy=notLogin]').contains('Continue without login').click();
        cy.url().should('include', '/home');

    });

    it('should have a link to the login page', () => {
        cy.get('[data-cy=loginBtn]').contains('Login').click();
        cy.url().should('include', '/login');
    })

    it('should have a link to the register page', () => {
        cy.get('[data-cy=signupBtn]').contains('Sign up').click();
        cy.url().should('include', '/signup');
    });

    it('should have a footer', () => {
        cy.get('footer')
    });
})

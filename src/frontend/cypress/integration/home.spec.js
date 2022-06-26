// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />
context('Home Page', () => {
    beforeEach(() => {
        cy.visit('/home');
    });

    it('should have a title', () => {
        cy.title().should('equal', 'Home');
    });

    it('check sidebar components', () => {
        cy.get('#header').get('button').first().click();
        cy.get('div').contains('Home');
        cy.get('div').contains('Discovery');
        cy.get('div').contains('Events');
        cy.get('img');
    });

    it('check language switcher', () => {
        cy.get('[data-cy="language-switcher"]').should('exist')
    });

    it('check home sidebar item', () => {
        cy.get('[data-cy=sidebar-button]').click();
        cy.get('div').contains('Home').click();
        cy.url().should('include', '/home');
    });

    it('check discovery sidebar item', () => {
        cy.get('[data-cy=sidebar-button]').click();
        cy.get('div').contains('Discovery').click();
        cy.url().should('include', '/discovery');
    });

    it('check events sidebar item', () => {
        cy.get('[data-cy=sidebar-button]').click();
        cy.get('div').contains('Events').click();
        cy.url().should('include', '/events');
    });
    it('check favorite sidebar item', () => {
        cy.get('[data-cy=sidebar-button]').click();
        cy.get('div').contains('Favorite').click();
        cy.url().should('include', '/favourites');
    });
    it('check contact sidebar item', () => {
        cy.get('[data-cy=sidebar-button]').click();
        cy.get('div').contains('Contact').click();
        cy.url().should('include', '/about');
    });
});

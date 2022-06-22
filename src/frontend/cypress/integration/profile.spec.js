/// <reference types="Cypress"/>
describe('Profile page - Good weather', () => {
    beforeEach(() => {
        cy.visit('/auth/login');
        cy.get('input[name="auth-email"]')
            .should('exist')            
            .type('test@gmail.com');
        cy.get('input[name="auth-password"]').should('exist').type('123456');
        cy.get('button').contains('Login').click();
        cy.visit('/profile');
    })

    it('Header exists', () => {     
        cy.get('h2').should('exist');
    });

    it('User info exists', () => {
        cy.get('[data-cy="profile-username"]').should('exist');
        cy.get('[data-cy="profile-email"]').should('exist');
        cy.get('[data-cy="profile-avatar"]').should('exist');
    });
    
    it('My preference button exists', () => {        
        cy.get('[data-cy="profile-button"]').should('exist');
    });
});

describe('Profile page - Bad weather', () => {
    it('Link to login', () => {
        cy.visit('/profile');
        cy.get('h1').should('eq', 'You are not logged in');
        cy.get('a').should('exist').contains('Login').click();
        cy.url().should('contain', '/auth/login');
    });
});
/// <reference types="Cypress" />
describe('Authenticaton: Reset password', () => {
    beforeEach(() => {
        cy.visit('/auth/reset');
    });

    it('type input for email', () => {
        cy.get('input[name="auth-email"]')
            .should('exist')
            .type('test@gmail.com');
    });

    it('click reset button', () => {
        cy.get('button').contains('Reset password').click();
    });

    it('check response message', () => {
        cy.get('input[name="auth-email"]')
            .should('exist')
            .type('test@gmail.com');
        cy.get('button').contains('Reset password').click();
        cy.get('[data-cy=responseMessage]').should('be.visible');
    });

    it('check back to login link', () => {
        cy.get('a').contains('Back to login').click();
        cy.url().should('eq', 'http://localhost:3000/auth/login');
    });
});

/// <reference types="Cypress" />
describe('Authenticaton: Sign Up Bad Weather-Already Existing Email', () => {
    it('type input for email', () => {
        cy.visit('/auth/signup');
        cy.get('input[name="signup-email"]')
            .should('exist')
            .type('test@gmail.com');
    });

    it('type input for password', () => {
        cy.get('input[name="signup-password"]').should('exist').type(123456);
    });

    it('type input for password confirmation', () => {
        cy.get('input[name="signup-password_confirm"]')
            .should('exist')
            .type('123456');
    });

    it('click sign up button', () => {
        cy.get('button').contains('Sign up').click();
    });

    it('check error display', () => {
        cy.get('#error-display')
            .should('exist')
            .should(
                'have.text',
                'Firebase: Error (auth/email-already-in-use).',
            );
    });
});

describe('Authenticaton: Sign Up Bad Weather-Missing Email', () => {
    it('type input for password', () => {
        cy.visit('http://localhost:3000/auth/signup');
        cy.get('input[name="signup-password"]').should('exist').type(123456);
    });

    it('type input for password confirmation', () => {
        cy.get('input[name="signup-password_confirm"]')
            .should('exist')
            .type('123456');
    });

    it('click sign up button', () => {
        cy.get('button').contains('Sign up').click();
    });

    it('check error display', () => {
        cy.get('#error-display')
            .should('exist')
            .should('have.text', 'Firebase: Error (auth/missing-email).');
    });
});

describe('Authenticaton: Sign Up Bad Weather-Non Matching Passwords', () => {
    it('type input for email', () => {
        cy.visit('http://localhost:3000/auth/signup');
        cy.get('input[name="signup-email"]')
            .should('exist')
            .type('test@gmail.com');
    });

    it('type input for password', () => {
        cy.get('input[name="signup-password"]')
            .should('exist')
            .type('randompassword');
    });

    it('type non-matching input for password confirmation', () => {
        cy.get('input[name="signup-password_confirm"]')
            .should('exist')
            .type('123456');
    });

    it('Click sign up button', () => {
        cy.get('button').contains('Sign up').click();
    });

    it('Check error display', () => {
        cy.get('#error-display')
            .should('exist')
            .should('have.text', 'Passwords do not match');
    });
});

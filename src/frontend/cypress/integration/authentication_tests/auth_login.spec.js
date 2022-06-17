/// <reference types="Cypress" />
describe("Authenticaton: Logging in Valid Credentials-Good Weather", () =>{
    it("type input for email", () =>{
        cy.visit('/auth/login')
        cy.get('input[name="auth-email"]')
        .should("exist")
        .type('test@gmail.com')
    })

    it("type input for password",()=>{
        cy.get('input[name="auth-password"]')
        .should("exist")
        .type("123456")
    })

    it('click login button', () => {
        cy.get('button').contains('Login')
        .click()
    })

     it('check if auth was valid', () => {
        cy.url().should('eq','http://localhost:3000/home')
    })

    it('click forget password', () => {
        cy.visit('/auth/login')
        cy.get('a').contains('Forget your password?').click();
        cy.url().should('eq','http://localhost:3000/auth/reset');
    })

    it('click sign up link', () => {
        cy.visit('/auth/login')
        cy.get('[data-cy=authLink]').click();
        cy.url().should('eq','http://localhost:3000/auth/signup');
    });
    
})

describe("Authenticaton: Logging in Valid Credentials-Bad Weather", () =>{
    it("type input for email", () =>{
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="auth-email"]')
        .should("exist")
        .type('test@gmail.com')
    })

    it("type input for password",()=>{
        cy.get('input[name="auth-password"]')
        .should("exist")
        .type("123456")
    })

    it('click login', () => {
        cy.get('button').contains('Login')
        .click()
    })

    
     it('check if auth was valid', () => {
        cy.url().should('eq','http://localhost:3000/auth/login')
    })
})
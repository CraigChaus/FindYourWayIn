/// <reference types="Cypress" />
describe("Logging in Valid Credentials-Good Weather", () =>{
    it("input for email", () =>{
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="auth-email"]')
        .should("exist")
        .type('test@gmail.com')
    })

    it("input for password",()=>{
        cy.get('input[name="auth-password"]')
        .should("exist")
        .type("123456")
    })

    it('Click login button', () => {
        cy.get('button').contains('Login')
        .click()
    })

     it('Check if auth was valid', () => {
        cy.url().should('eq','http://localhost:3000/home')
    })
    
})

describe("Logging in Valid Credentials-Bad Weather", () =>{
    it("input for email", () =>{
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="auth-email"]')
        .should("exist")
        .type('test@gmail.com')
    })

    it("input for password",()=>{
        cy.get('input[name="auth-password"]')
        .should("exist")
        .type("123456")
    })

    it('should have a link to the login page', () => {
        cy.get('button').contains('Login')
        .click()
    })

    
     it('Check if auth was valid', () => {
        cy.url().should('eq','http://localhost:3000/auth/login')
    })
})
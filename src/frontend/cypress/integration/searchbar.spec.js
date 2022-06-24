/// <reference types="Cypress" />
describe('type in to search bar', () => {
    it('search bar should exist', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('input[placeholder="Search a place"]').should('exist');
    });

    it('focus on input field', () => {
        cy.get('input[placeholder="Search a place"]').focus();
    });


    it('type in search bar', () => {
        cy.get('input[placeholder="Search a place"]')
            .type('Speel')
            .type('{enter}');
    });

    it('result appears', () => {
        cy.get('div').contains('Speel je Wijs').should('exist');
    });


    it('dropdown menu is exist', () => {
        cy.get('#testSearch').should('exist');
    });


    it('Clicked on dropdown menu', () => {
        cy.get('#testSearch').click();
    });

    it('bottom Slider appeared', () => {
        cy.get('#bottomSlider').should('exist');
    });

    it('delete text from input', () => {
        cy.get('input[placeholder="Search a place"]').clear();

    });

    it('check if it is empty', () => {
        cy.get('input[placeholder="Search a place"]').should('be.empty');
    });

    it('check if after deleting we do not have dropdown element', () => {
        cy.get('#slideSearchBar').should('not.exist');
    });


    it('type in search bar to check after if it is scrollable', () => {
        cy.get('input[placeholder="Search a place"]')
            .type('Deventer')
            .type('{enter}')

    });


    it('scroll to bottom, to check function of scrollability', () => {
        cy.get('#slideSearchBar').scrollTo("bottom").click()
    });



    // it('check if after deleting we do not have dropdown element', () => {
    //     cy.get('#slideSearchBar').should('not.exist');
    // });

    // CypressTools.getByName(inputFieldName)
    //     //     .should('be.visible')              // check the DOM element, passes it on as subject
    //     //     .invoke('val')                     // changes subject to the text of the input
    //     //     .should('not.be.empty');           // check the text is not empty

    // TODO: Click on the element

    // Check if the div with the location description paragraph exists
});

describe('type in to search bar', () => {
    it('Contact page is exist and there is Nav-bar', () => {
        cy.visit('http://localhost:3000/about');
        cy.get('#defaultNavBar').should('exist');
    });


    it('Header exists', () => {
        cy.get('h2').should('exist');
    });


    it('in Header we have text "Let us grow your wealth"', () => {
        cy.get('#main').contains('h2', 'Let us grow your wealth')
    });

    it('First paragraph exists', () => {
        cy.get('#firstParagraph').should('exist');
    });

    it('in second paragraf we have text "If you want your location to be displayed on our WebApp" ', () => {
        cy.get('#main').contains('p', 'If you want your location to be displayed on our WebApp' +
            ', please contact us.')
    });

    it('Checking teg "a" for phone ', () => {
        cy.get('#phoneNumber').should('exist');

    });

    it('Checking teg "a" for email ', () => {
        cy.get('#email').should('exist');

    });


    it('should have a footer', () => {
        cy.get('footer');
    });

    // it('focus on input field', () => {
    //     cy.get('input[placeholder="Search a place"]').focus();
    // });

});
context('Map NavBar', () => {

    it('Contact page is exist and there is Nav-bar', () => {
        cy.visit('/home');
    });


    it('should have a map-navbar', () => {
        cy.get('#mapNavBar').should('exist');
    });

    it('should have searchBar field', () =>{
        cy.get('input[placeholder="Search a place"]').should('exist');
    });


    it('should have icon for Profile page', () => {
        cy.get('#userButton').should('exist');
    });

});
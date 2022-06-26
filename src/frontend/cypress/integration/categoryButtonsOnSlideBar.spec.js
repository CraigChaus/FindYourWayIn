context('CategoryButtonsSlideBar', () => {
    it('Home page is exist and there is button for slider menu', () => {
        cy.visit('/home');
        cy.get('#buttonForSliderMenu').should('exist');
    });

    it('When we click on this button - menu will open', () => {
        cy.get('#buttonForSliderMenu').click();
        cy.get('#categoriesMenu').should('exist');
    });

    it(' Check if categories buttons exist and clickable', () => {
        cy.get('#testCategoryButtons').should('exist');
        cy.get('#testCategoryButtons').click();
    });

    it('When we again click on this menu for slide menu bar-button - menu will be closed', () => {
        cy.get('#buttonForSliderMenuToClose').click();
        cy.get('#categoriesMenu').should('not.exist');
    });
});

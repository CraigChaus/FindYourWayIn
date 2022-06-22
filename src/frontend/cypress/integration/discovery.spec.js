
describe('Discovery page', () => {
    beforeEach(() => {
        cy.visit('/discovery');
    });

    it('should display Spotlight'), () => {
        cy.get('[data-cy="spotlight"]').should('exist');
        cy.get('[data-cy="spotlight-header"]').should('contain', 'Spotlight');
        cy.get('img').should('have.attr', 'alt', 'alt');
    };

    it('click on spotlight button', () => {
        cy.get('[data-cy="spotlight-button"]').click();
        cy.url().should('contain', '/description');
    })

    it('should contain category buttons', () => {
        cy.get('[data-cy="category"]').should('exist');
    })

    it('should contain location items', () => {
        cy.get('[data-cy="location-items"]').should('exist');
        cy.get('[data-cy="location-items"]').children().should('exist');

    })
})
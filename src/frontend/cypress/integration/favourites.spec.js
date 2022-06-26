

describe('FAVOURITES: getting location', () => {
    beforeEach(() => {
            it('type input for email', () => {
            cy.visit('/auth/login');
            cy.get('input[name="auth-email"]')
                .should('exist')
                .type('test@gmail.com');
        });

        it('type input for password', () => {
            cy.get('input[name="auth-password"]').should('exist').type('123456');
        });

        it('click login button', () => {
            cy.get('button').contains('Login').click();
            
        });
    });

    it(('check if the data is retireved from firstore and FeedFactoryAPI'), () => {
        cy.visit('http://localhost:3000/favourites');
        cy.get('div').contains('Tearose');
        cy.get('div').contains('Walstraat 20, Deventer');
    });

});
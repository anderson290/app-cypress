/// <reference types="cypress" />

context('fill form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200');
    });

    it('fill form', () => {

        //nome
        cy.get('.action-form')
            .find('[formControlName="name"]').type('Anderson')
            .should('have.value', 'Anderson')
        
        //sobrenome
        cy.get('.action-form')
            .find('[formControlName="lastName"]').type('Nunes')
            .should('have.value', 'Nunes')

        //date
        cy.get('.action-form')
            .find('[formControlName="date"]').type('1999-02-12')
            .should('have.value', '1999-02-12')

        //senha
        cy.get('#button0',  { delay: 100 }).click()
        cy.get('#button1').click()
        cy.get('#button2').click()
        cy.get('#button3').click()
        cy.get('#buttonClear', { delay: 100 }).click()
        cy.get('#buttonClear', { delay: 100 }).click()
        cy.get('#button4').click()
        cy.get('#button3').click()
        cy.get('#button2').click()
        cy.get('#button1').click()

        cy.get('#senha').should('have.value', '!@%$#@');
        
        //sendForm
        cy.get('.action-form')
            .find('[type="submit"]').click()


        cy.get('.content').should('contain', 'Anderson')


    });



});  
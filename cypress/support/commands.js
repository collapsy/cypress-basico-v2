
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Ronaldo')
    cy.get('#lastName').type('Gentil')
    cy.get('#email').type('ronaldogentil2@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('.button', 'Enviar').click()
})
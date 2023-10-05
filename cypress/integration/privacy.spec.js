/// <reference types="Cypress" />

describe('CAC TAT - Política de privacidade', function () {
    beforeEach(function () {
        cy.visit('./src/privacy.html')

    })

    Cypress._.times(5, () => {
        it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
            cy.contains('Talking About Testing').should('be.visible')
        })
    })

})
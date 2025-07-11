/// <reference types="cypress" />

describe('Testes para a home', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })

  it('Deve incluir novo contato', () => {
    cy.get('.contato')
      .its('length')
      .then((initialCount) => {
        cy.get('input[type="text"]').type('Guilherme')
        cy.get('input[type="email"]').type('guilherme@teste.com')
        cy.get('input[type="tel"]').type('11999999999')

        cy.get('button[type="submit"]').click()

        cy.get('.contato').should('have.length', initialCount + 1)
      })
  })

  it('Deve editar contato', () => {
    cy.get('.contato').last().find('button').last().click()

    cy.get('input[type="text"]').clear().type('João')
    cy.get('input[type="email"]').clear().type('joao@teste.com')

    cy.get('button[type="submit"]').click()

    cy.get('.contato').last().should('contain', 'João')
  })

  it('Deve remover contato', () => {
    cy.get('.contato')
      .its('length')
      .then((initialCount) => {
        cy.get('.contato').last().find('button').first().click()

        cy.get('.contato').should('have.length', initialCount - 1)
      })
  })
})

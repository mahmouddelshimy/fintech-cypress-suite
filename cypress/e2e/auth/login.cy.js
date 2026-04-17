describe('Login Tests', () => {
  it('should login successfully with valid credentials', () => {
    cy.logStep('Login with valid username and password')
    cy.login('john', 'demo')

    cy.url().should('include', '/overview')
    cy.contains('Accounts Overview').should('be.visible')
  })

  it('should show an error message with invalid credentials', () => {
    cy.logStep('Attempt login with invalid username and password')
    cy.login('wrongUser', 'wrongPass')

    cy.contains('The username and password could not be verified.')
      .should('be.visible')
  })
})
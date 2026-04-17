describe('Login Tests', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  it('should login successfully with valid credentials', () => {
    cy.logStep('Login with valid username and password')
    cy.login(users.validUser.username, users.validUser.password)

    cy.url().should('include', '/overview')
    cy.contains('Accounts Overview').should('be.visible')
  })

  it('should show an error message with invalid credentials', () => {
    cy.logStep('Attempt login with invalid username and password')
    cy.login(users.invalidUser.username, users.invalidUser.password)

    cy.contains('The username and password could not be verified.')
      .should('be.visible')
  })
})
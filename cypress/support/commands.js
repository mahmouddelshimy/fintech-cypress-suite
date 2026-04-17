import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

Cypress.Commands.add('logStep', (message) => {
  cy.log(`STEP: ${message}`)
})

Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit()
  LoginPage.login(username, password)
})

Cypress.Commands.add('registerUser', (user) => {
  RegisterPage.visit()
  RegisterPage.register(user)
})
import { faker } from '@faker-js/faker'

describe('Registration Tests', () => {
  it('should register a new user successfully', () => {
    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phone: faker.phone.number('##########'),
      ssn: faker.string.numeric(9),
      username: `user_${Date.now()}`,
      password: 'Test@12345',
      confirmPassword: 'Test@12345'
    }

    cy.logStep('Register a new user with dynamic data')
    cy.registerUser(user)

    cy.contains('Your account was created successfully. You are now logged in.')
      .should('be.visible')
  })
})
class RegisterPage {
  visit() {
    cy.visit('/register.htm')
  }

  fillFirstName(firstName) {
    cy.get('input[id="customer.firstName"]').clear().type(firstName)
  }

  fillLastName(lastName) {
    cy.get('input[id="customer.lastName"]').clear().type(lastName)
  }

  fillAddress(address) {
    cy.get('input[id="customer.address.street"]').clear().type(address)
  }

  fillCity(city) {
    cy.get('input[id="customer.address.city"]').clear().type(city)
  }

  fillState(state) {
    cy.get('input[id="customer.address.state"]').clear().type(state)
  }

  fillZipCode(zipCode) {
    cy.get('input[id="customer.address.zipCode"]').clear().type(zipCode)
  }

  fillPhone(phone) {
    cy.get('input[id="customer.phoneNumber"]').clear().type(phone)
  }

  fillSsn(ssn) {
    cy.get('input[id="customer.ssn"]').clear().type(ssn)
  }

  fillUsername(username) {
    cy.get('input[id="customer.username"]').clear().type(username)
  }

  fillPassword(password) {
    cy.get('input[id="customer.password"]').clear().type(password)
  }

  fillConfirmPassword(confirmPassword) {
    cy.get('input[id="repeatedPassword"]').clear().type(confirmPassword)
  }

  clickRegister() {
    cy.get('input[value="Register"]').click()
  }

  register(user) {
    this.fillFirstName(user.firstName)
    this.fillLastName(user.lastName)
    this.fillAddress(user.address)
    this.fillCity(user.city)
    this.fillState(user.state)
    this.fillZipCode(user.zipCode)
    this.fillPhone(user.phone)
    this.fillSsn(user.ssn)
    this.fillUsername(user.username)
    this.fillPassword(user.password)
    this.fillConfirmPassword(user.confirmPassword)
    this.clickRegister()
  }
}

export default new RegisterPage()
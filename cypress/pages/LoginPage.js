class LoginPage {
  visit() {
    cy.visit('/')
  }

  getUsernameField() {
    return cy.get('input[name="username"]')
  }

  getPasswordField() {
    return cy.get('input[name="password"]')
  }

  getLoginButton() {
    return cy.get('input[value="Log In"]')
  }

  fillUsername(username) {
    this.getUsernameField().clear().type(username)
  }

  fillPassword(password) {
    this.getPasswordField().clear().type(password)
  }

  clickLogin() {
    this.getLoginButton().click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickLogin()
  }
}

export default new LoginPage()
class SignIn {

    signUpLink = () => cy.get('[data-test="signup"]')
}

export const signIn = new SignIn()
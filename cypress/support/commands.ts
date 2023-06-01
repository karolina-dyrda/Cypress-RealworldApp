Cypress.Commands.add('loginUI', (username: string, password: string, status: number) => {
    cy.visit(Cypress.env('host'))
    cy.intercept('POST','**/login').as('login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('button[type="submit"]').click()
    cy.wait('@login').then(intReq => {
        expect(intReq.response?.statusCode).to.equal(status)
    })
});

Cypress.Commands.add('logoutUI', () => {

    const logout = () => {
        cy.intercept('POST','**/logout').as('logout')
        cy.get('[data-test="sidenav-signout"]').click()
        cy.wait('@logout')
        cy.url().should('include', '/signin')
        }

        cy.get('[data-test="sidenav-signout"]').then(($btn) => {
            if ($btn.is(':visible')) {
                logout();
            }
            else {
                cy.get('[data-test="drawer-icon"]').click()
                logout();
            }
        })
})

Cypress.Commands.add('loginAPI', (username: string, password: string, status: number) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('api'),
        body: {
            password: password,
            type: 'LOGIN',
            username: username
        }
    }).then(res => {
        expect(res.status).to.eq(status)
    })
})

Cypress.Commands.add(('sideNavi'), (node: 
    'home' | 
    'user-settings' |
    'bankaccounts' |
    'notifications' |
    'signout') => {
    cy.get(`[data-test="sidenav-${node}"]`).click()
})

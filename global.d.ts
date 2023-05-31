/// <reference types="cypress" />

declare namespace Cypress {

  interface Chainable {

    /**
     * Log in via UI
     */
    loginUI(username: string, password: string, status: number): Chainable<any>;

    /**
     * Log in via API
     */
    loginAPI(username: string, password: string, status: number): Chainable<any>

    /**
     * Log out via UI
     */
    logoutUI(): Chainable<any>;

    /**
     * Navigate to the seleted side-nav node
     */
    sideNavi(node: 
      'home' | 
      'user-settings' |
      'bankaccounts' |
      'notifications' |
      'signout'): Chainable<any>;
      
  }
}

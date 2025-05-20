import { elements as el } from "./elements"

class Login{

    loginValido(){
        cy.get(el.email).type(Cypress.env('email'))
        cy.get(el.senha).type(Cypress.env('senha'))
        cy.get(el.btnEntrar).click()
    }
}


export default new Login()
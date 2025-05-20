import { elements as el } from "./elements"

class Dashboard{

    redirecionamentoDashboard(){
        cy.visit('/dashboard')
            cy.url().should('eq', 'http://localhost:3000/dashboard')
    }

    verificarBtCadastrarEspecialista(){
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:3000/dashboard')
        cy.contains('Cadastrar especialista').should('be.visible').click()
    }
    
    checkboxDesmarcado(){
        cy.visit('/dashboard')
        cy.contains('Cadastrar especialista').should('be.visible').click()
        cy.get(el.checkBox).should('have.attr', 'aria-label', 'Atende por plano?').and('not.be.checked')
    }

    marcarCheckBox(){
        cy.visit('/dashboard')
            cy.contains('Cadastrar especialista').should('be.visible').click()
            cy.get(el.checkBox).check()
            cy.get('form').find('input[type="checkbox"]').should('be.checked').and('not.be.disabled')
            cy.get(el.checkBox).check(['Sulamerica', 'Unimed', 'Bradesco'])
    }


    selecionaCheckBox(){
        cy.get('@especialistas').then((dados) => {
            const especialista = dados.especialistas[0];
            cy.cadastraEspecialista(
                especialista.nome,
                especialista.email,
                especialista.senha,
                especialista.especialidade,
                especialista.crm,
                especialista.imagem,
                especialista.cep,
                especialista.rua,
                especialista.numero,
                especialista.complemento,
                especialista.estado
            );

            cy.get('[type="checkbox"]').check()
            cy.get('[type="checkbox"]').last().scrollIntoView({ easing: 'linear' })

            cy.get('.MuiFormGroup-root').children().each(($checkbox) => {
                cy.wrap($checkbox).should('be.visible')
            })
        })
    }


}

export default new Dashboard()
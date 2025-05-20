import dashboard from "../pages/dashboard"
import Dashboard from "../pages/dashboard"

describe('Usuário logado na página de dashboard', () => {
    beforeEach(() => {
        cy.fixture('especialistas.json').as('especialistas')
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })

    context('Redirecionamento na página de dashboard', () => {
        
        it('Verifica página de redirecionamento no login com sucesso', () => {
            Dashboard.redirecionamentoDashboard()
        })

        it('Com o usuário logado, verificar botao cadastra um especialista', () => {
           Dashboard.verificarBtCadastrarEspecialista()


        })

    })

    context('Modal de cadastro de especialista', () => {
       
        it('Verifica se o checkbox "Atende por plano?" está desmarcado', () => {
           Dashboard.checkboxDesmarcado()
        })

        it('Seleciona o botão checkbox "Atende por plano?" para visualizar os planos de saúde', () => {
            Dashboard.marcarCheckBox()
        })

        
       // cadastrando especialista com json, e marcando todos os checkbox
       
        it('Seleciona o botão checkbox "Atende por plano?" após preenchimento do formulário para visualizar os planos de saúde', () => {
            
            Dashboard.selecionaCheckBox()
          
        })

    })

})
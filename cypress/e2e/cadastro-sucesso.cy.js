import cadastro from "../pages/paginaCadastro";

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Testes na página de cadastro ', () => {
        it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
           cadastro.linkCadastrar()
        })
    })

    context('Cadastrando clinica ', () => {

        it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
            cadastro.parteOneCadastro()

        })
    })


    context('Sessão de cadastro completa', () => {
        it('Cadastra uma clínica', () => {
            cadastro.parteTwoCadastro()

        })
    })

})

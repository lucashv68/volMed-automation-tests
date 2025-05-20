describe('Testes em API', () => {
    context('Testes em rotas com usuario autorizado', ()=>{
        beforeEach(()=>{
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })

        it('GET via URL fronte para teste em respost da home', ()=>{
            cy.request('GET', '/').should((response)=>{
                expect(response.status).to.eq(200)
            })
        })
        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist');
    })
    })
    
});

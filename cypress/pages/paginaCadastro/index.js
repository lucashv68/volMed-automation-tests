import { elements as el } from "./elements";

class cadastro{

    linkCadastrar(){
        cy.get(el.cadastreSeButton).click();
        cy.location('pathname').should('equal', '/cadastro')
     }


     parteOneCadastro(){
        cy.get(el.cadastreSeButton).click();
        
        cy.get(el.nomeCadastro).type('Catarina P');
        cy.get(el.cnpjCadastro).type('12598432');
        cy.get(el.emailCadastro).type('catarina@email.com');
        cy.get(el.senhaCadastro).type('Senha123');
        cy.get(el.confirmaSenhaCadastro).type('Senha123');
        
        cy.get(el.avancarButton).should('be.enabled').click();
        cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
        cy.get('.sc-laZRCg').should('exist').should('be.visible');

     }

     parteTwoCadastro(){
      
      cy.get(el.cadastreSeButton).click();
      cy.wait(4000);
      cy.get(el.nomeCadastro).type('Catarina P');
      cy.get(el.cnpjCadastro).type('12598432');
      cy.get(el.emailCadastro).type('catarina@email.com');
      cy.get(el.senhaCadastro).type('Senha123');
      cy.get(el.confirmaSenhaCadastro).type('Senha123');
      cy.get(el.avancarButton, { timeout:6000 }).should('be.enabled').click();
      cy.get(el.telefone).type('9999999999');
      cy.get(el.cep).type('99999999');
      cy.get(el.rua).type('Salvatori');
      cy.get(el.numeroCasa).type('999');
      cy.get(el.complemento).type('Irmãos salvatori');
      cy.get(el.estado).type('BA');
      cy.get(el.avancarButton).click();
      cy.wait(4000);
      cy.location('pathname').should('equal', '/login');
      
     }




}


export default new cadastro ()
import {host} from "../utils/utils";

describe('App', () => {
    before('подключение к  localhost:3000', () => {
        cy.visit(host);
    });
    it('подключение к станице строка', () => {
       cy.visit(host)
        cy.get('a[href*="/recursion"]').click();
       cy.get('button').contains('К оглавлению').click()
    })
    it('подключение к станице Фибоначчи', () => {
        cy.visit(host)
        cy.get('a[href*="/fibonacci"]').click();
        cy.get('button').contains('К оглавлению').click()
    })
    it('подключение к станице сортировки', () => {
        cy.visit(host)
        cy.get('a[href*="/sorting"]').click();
        cy.get('button').contains('К оглавлению').click()
    })
    it('подключение к станице стек', () => {
        cy.visit(host)
        cy.get('a[href*="/stack"]').click();
        cy.get('button').contains('К оглавлению').click()
    })
    it('подключение к станице очередь', () => {
        cy.visit(host)
        cy.get('a[href*="/queue"]').click();
        cy.get('button').contains('К оглавлению').click()
    })
    it('подключение к станице связный список', () => {
        cy.visit(host)
        cy.get('a[href*="/list"]').click();
        cy.get('button').contains('К оглавлению').click()
    })
});
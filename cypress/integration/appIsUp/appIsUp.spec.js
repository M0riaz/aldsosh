import {host} from "../utils/utils";
import {fibonacciPage, listPage, queuePage, sortingPage, stackPage, stringPage} from "../utils/const";

describe('App', () => {
    before('подключение к  localhost:3000', () => {
        cy.visit(host);
    });

    it('подключение к станице строка', () => {
       cy.visit(host)
        cy.get(stringPage).click();
        cy.get('[class*=return-button_button]').contains('К оглавлению').as('button').click()

        cy.visit(host)
        cy.get(fibonacciPage).click();
        cy.get('@button').click()

        cy.visit(host)
        cy.get(sortingPage).click();
        cy.get('@button').click()

        cy.visit(host)
        cy.get(stackPage).click();
        cy.get('@button').click()

        cy.visit(host)
        cy.get(queuePage).click();
        cy.get('@button').click()

        cy.visit(host)
        cy.get(listPage).click();
        cy.get('@button').click()
    });

});
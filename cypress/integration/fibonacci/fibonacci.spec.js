import {host} from "../utils/utils";
import {circle} from "../utils/const";

describe('fibonacci', () => {
    it('переход на страницу фибоначчи ', () => {
        cy.visit(host);
        cy.get('a[href*="/fibonacci"]').click();
    });
    it('проверка инпута', () => {
        cy.get('input').should('have.value', '')
        cy.get('button').should('be.disabled')
    })
    it('проверка корректной генерации чисел', () => {
        cy.clock();
        cy.get('input').type('8').should("have.value", "8")
        cy.get('button').should('not.be.disabled')
        cy.get('button').contains('Рассчитать').click()

        cy.tick(250)

        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('1');

        cy.tick(250)
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('1');

        cy.tick(500)

        cy.get(circle)
            .eq(2)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('2');
        cy.tick(500)

        cy.get(circle)
            .eq(3)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('3');

        cy.tick(500)
        cy.get(circle)
            .eq(4)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('5');

        cy.tick(500)
        cy.get(circle)
            .eq(5)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('8');

        cy.tick(500)
        cy.get(circle)
            .eq(6)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('13');

        cy.tick(500)
        cy.get(circle)
            .eq(7)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('21');

        cy.tick(500)
        cy.get(circle)
            .eq(8)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('34');

    })

})
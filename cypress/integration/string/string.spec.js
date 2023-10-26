import {host} from "../utils/utils";
import {circle} from "../utils/const";

describe('string', () => {
    before('подключение к странице строка', () => {
        cy.visit(host);
        cy.get('a[href*="/recursion"]').click();
    });
    it('проверка инпута', () => {
        cy.get('input').should('have.value', '')
        cy.get('button').should('be.disabled')
    })
    it('проверка корректности разворачивания строки', () => {
        cy.clock()
        cy.get("input").type("123qw")
        cy.get('button').should('not.be.disabled')
        cy.get('button').contains('Развернуть').click()

        cy.get(circle)
            .eq(0)
            .should('have.css', 'border', '4px solid rgb(0, 50, 255)')
            .contains('1')
        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', '4px solid rgb(0, 50, 255)')
            .contains('2')
        cy.get(circle)
            .eq(2)
            .should('have.css', 'border', '4px solid rgb(0, 50, 255)')
            .contains('3')
        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', '4px solid rgb(0, 50, 255)')
            .contains('q')
        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', '4px solid rgb(0, 50, 255)')
            .contains('w')

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should('have.css', 'border', '4px solid rgb(210, 82, 225)')
            .contains('1');


        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', '4px solid rgb(210, 82, 225)')
            .contains('w');

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should('have.css', 'border', '4px solid rgb(127, 224, 81)')
            .contains('w');

        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', '4px solid rgb(127, 224, 81)')
            .contains('1');

        cy.tick(1000);

        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', '4px solid rgb(210, 82, 225)')
            .contains('2');

        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', '4px solid rgb(210, 82, 225)')
            .contains('q');

        cy.tick(1000);
        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', '4px solid rgb(127, 224, 81)')
            .contains('q');

        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', '4px solid rgb(127, 224, 81)')
            .contains('2');

        cy.tick(1000);
        cy.get(circle)
            .eq(2)
            .should('have.css', 'border', '4px solid rgb(127, 224, 81)')
            .contains('3');

    })
})
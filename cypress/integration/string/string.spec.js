import {host} from "../utils/utils";
import {blueColor, circle, greenColor, pinkColor, stringPage} from "../utils/const";

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
            .should('have.css', 'border', blueColor)
            .contains('1')
        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', blueColor)
            .contains('2')
        cy.get(circle)
            .eq(2)
            .should('have.css', 'border', blueColor)
            .contains('3')
        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', blueColor)
            .contains('q')
        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', blueColor)
            .contains('w')

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should('have.css', 'border', pinkColor)
            .contains('1');


        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', pinkColor)
            .contains('w');

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should('have.css', 'border', greenColor)
            .contains('w');

        cy.get(circle)
            .eq(4)
            .should('have.css', 'border', greenColor)
            .contains('1');

        cy.tick(1000);

        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', pinkColor)
            .contains('2');

        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', pinkColor)
            .contains('q');

        cy.tick(1000);
        cy.get(circle)
            .eq(1)
            .should('have.css', 'border', greenColor)
            .contains('q');

        cy.get(circle)
            .eq(3)
            .should('have.css', 'border', greenColor)
            .contains('2');

        cy.tick(1000);
        cy.get(circle)
            .eq(2)
            .should('have.css', 'border', greenColor)
            .contains('3');

    })
})
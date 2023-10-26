import {host} from "../utils/utils";
import {blueColor, circle, head, pinkColor, stackArr, stackPage} from "../utils/const";


describe('stack',() => {
    it('подключение к станице стека',() => {
        cy.visit(host);
        cy.get('a[href*="/stack"]').click();
    })
    it('проверка инпута', () => {
        cy.get('input').should('have.value', '');
        cy.get('button').should('be.disabled');
    })
    it('правильность добавления элемента в стек', () => {
        cy.clock();

        cy.get("input").type("q");
        cy.get('button').contains('Добавить').should('not.be.disabled');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", pinkColor)
            .contains('q');
        cy.get(head)
            .eq(0)
            .contains('top');

        cy.tick(500);

        cy.get(circle)
            .eq(0)
            .should("have.css", "border",blueColor);
        cy.get('input').type('w');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", pinkColor)
            .contains('w');
        cy.get(circle)
            .eq(1)
            .get(head)
            .contains('top');

        cy.tick(500);
        cy.get(circle)
            .eq(1)
            .should("have.css", "border",blueColor);
        cy.get('input').type('123');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(2)
            .should("have.css", "border", pinkColor)
            .contains('123');
        cy.get(circle)
            .eq(2)
            .get(head)
            .contains('top');

        cy.tick(500);
        cy.get(circle)
            .eq(2)
            .should("have.css", "border",blueColor)
            .end();

    });

    it('удаление из стека',  () => {

        cy.clock()
        cy.tick(500)
        cy.get('button').contains('Удалить').click();

        cy.get(circle)
            .eq(2)
            .should("have.css", "border", pinkColor)
            .contains('123');
        cy.get(circle)
            .eq(2)
            .get(head)
            .contains('top');

        cy.tick(500)

    });
    it('очищение стека',  () => {
        cy.get('button').contains('Очистить').click();
        cy.get(stackArr).should("not.have.length")
    });
})
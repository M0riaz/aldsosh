import {host} from "../utils/utils";
import {blueColor, circle, head, pinkColor, queueArr, queuePage, tail} from "../utils/const";

describe('queue', () => {
    it('подключение к станице очередь',  () => {
        cy.visit('queue')
    });
    it('проверка инпута', () => {
        cy.get('input').should('have.value', '');
        cy.get('button').should('be.disabled');
    })

    it('правильность добавления элемента в очередь', () => {
        cy.clock();
        cy.get("input").type("m");
        cy.get('button').contains('Добавить').should('not.be.disabled');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", pinkColor)
            .contains('m');
        cy.get(head)
            .eq(0)
            .contains('head');
        cy.get(tail)
            .eq(0)
            .contains('tail');

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should("have.css", "border",blueColor);
        cy.get(head)
            .eq(0)
            .contains('head');
        cy.get('input').type('e');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", pinkColor)
            .contains('e');
        cy.get(circle)
            .eq(1)
            .get(tail)
            .contains('tail');

        cy.tick(1000);
        cy.get(circle)
            .eq(1)
            .should("have.css", "border",blueColor);
        cy.get('input').type('o');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(2)
            .should("have.css", "border", pinkColor)
            .contains('o');
        cy.get(circle)
            .eq(2)
            .get(head)
            .contains('head');

        cy.tick(1000);
        cy.get(circle)
            .eq(2)
            .should("have.css", "border",blueColor);
        cy.get('input').type('w');
        cy.get('button').contains('Добавить').click();
        cy.get(circle)
            .eq(3)
            .should("have.css", "border", pinkColor)
            .contains('w');
        cy.get(circle)
            .eq(3)
            .get(head)
            .contains('head');

        cy.tick(1000);
        cy.get(circle)
            .eq(3)
            .should("have.css", "border",blueColor)
            .end();
    })
    it('удаление элемента из очереди',  () => {
        cy.clock()
        cy.tick(1000)
        cy.get('button').contains('Удалить').click();
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", pinkColor)

        cy.tick(1000)
        cy.get(circle)
            .eq(0)
            .should("have.css", "border",blueColor);
        cy.get(circle)
            .eq(1)
            .get(head)
            .contains('head');
    });
    it('очищение очереди ',  () => {
        cy.get('button').contains('Очистить').click();
        cy.get(queueArr).should("not.have.length")
    });
})
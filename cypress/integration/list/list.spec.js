import {host} from "../utils/utils";
import {circle, head, input, meaning, smallCircle, tail} from "../utils/const";

describe('list', () => {
    it('подключение к станице список',  () => {
        cy.visit(host);
        cy.get('a[href*="/list"]').click();
    });
    it('проверка инпута', () => {
        cy.get('input').should('have.value', '');
        cy.get('button').should('be.disabled');
    })
    it('отрисовки дефолтного списка ',  () => {
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('0');
        cy.get(head)
            .eq(0)
            .contains('Head');
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('1');
        cy.get(circle)
            .eq(2)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('7');
        cy.get(circle)
            .eq(3)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('45');
        cy.get(circle)
            .eq(4)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('12');
        cy.get(tail)
            .eq(4)
            .contains('Tail');
    });
    it('добавления элемента в head', () => {
        cy.clock();
        cy.get(meaning).type("u");
        cy.get('button').contains('Добавить в head').should('not.be.disabled');
        cy.get('button').contains('Добавить в head').click();

        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('u')

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(127, 224, 81)')
            .contains('u');

        cy.tick(1000);
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('u');
        cy.get(head)
            .eq(0)
            .contains('Head');
    })
    it('добавления элемента в tail', () => {
        cy.clock();
        cy.get(meaning).type("qwe");
        cy.get('button').contains('Добавить в tail').should('not.be.disabled');
        cy.get('button').contains('Добавить в tail').click();

        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('qwe')

        cy.tick(1000);
        cy.get(circle)
            .eq(6)
            .should("have.css", "border", '4px solid rgb(127, 224, 81)')
            .contains('qwe');

        cy.tick(1000);
        cy.get(circle)
            .eq(6)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('qwe');
        cy.get(tail)
            .eq(6)
            .contains('Tail');
    })
    it('удаления элемента из head',  () => {
        cy.clock()
        cy.tick(1000)
        cy.get('button').contains('Удалить из head').click();
        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('u')

        cy.tick(1000)
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('0');
        cy.get(head)
            .eq(0)
            .contains('Head');
    });

    it('удаления элемента из tail',  () => {
        cy.clock()
        cy.tick(1000)
        cy.get('button').contains('Удалить из tail').click();
        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('qwe')

        cy.tick(1000)
        cy.get(circle)
            .eq(4)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('12');
        cy.get(tail)
            .eq(4)
            .contains('Tail');
    })

    it('добавления элемента по индексу',  () => {
        cy.clock();
        cy.get(meaning).type("hi");
        cy.get(input).type('1')
        cy.get('button').contains('Добавить по индексу').should('not.be.disabled');
        cy.get('button').contains('Добавить по индексу').click();

        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('hi')

        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')

        cy.tick(1000)
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')

        cy.tick(1000)
        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('0');
        cy.get(head)
            .eq(0)
            .contains('Head');

        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(127, 224, 81)')
            .contains('hi')

        cy.tick(1000)
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('hi')
    })
    it('удаления элемента по индексу',  () => {
        cy.clock();
        cy.get(input).type('3')
        cy.get('button').contains('Удалить по индексу').should('not.be.disabled');
        cy.get('button').contains('Удалить по индексу').click();

        cy.get(circle)
            .eq(0)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('0')

        cy.tick(1000)
        cy.get(circle)
            .eq(1)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('hi')

        cy.tick(1000)
        cy.get(circle)
            .eq(2)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('1')

        cy.tick(1000)
        cy.get(circle)
            .eq(3)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('7')

        cy.tick(1000)
        cy.get(smallCircle)
            .should("have.css", "border", '4px solid rgb(210, 82, 225)')
            .contains('7')

        cy.tick(1000)
        cy.get(circle)
            .eq(3)
            .should("have.css", "border", '4px solid rgb(0, 50, 255)')
            .contains('45')
        cy.get(head)
            .eq(0)
            .contains('Head');
    });
})
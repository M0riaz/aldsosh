import {SortingPage} from "./sorting-page";
import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import React from "react";

describe('Sorting', () => {
    it('Тестирование алгоритмов сортировки выбором, пустого массива', () => {
        render(
            <MemoryRouter>
                <SortingPage/>
            </MemoryRouter>
        );

        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const selectionRadio = screen.getByTestId('choseRadio');
        fireEvent.click(selectionRadio);

        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);

        const columns = screen.queryAllByTestId('columns');
        if(columns.length === 0){
            const newArray = screen.getAllByTestId('columns');
            expect(newArray).toHaveLength(0);
        }
    });
    it('Тестирование алгоритмов сортировки пузырьком,пустого массива', () => {
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );
        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const selectionRadio = screen.getByTestId('boobleRadio');
        fireEvent.click(selectionRadio);

        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);

        const columns = screen.queryAllByTestId('columns');
        if(columns.length === 0){
            const newArray = screen.getAllByTestId('columns');
            expect(newArray).toHaveLength(0);
        }
    });
    it('Тестирование алгоритмов сортировки выбором, одного элемента', () => {
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );
        const button = screen.getByText('Новый массив');
        fireEvent.click(button);
        const selectionRadio = screen.getByTestId('choseRadio');
        fireEvent.click(selectionRadio);
        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);
        const columns = screen.getAllByTestId('columns')[0];
        expect(columns).toBeInTheDocument()

    })
    it('Тестирование алгоритмов сортировки пузырьком, одного элемента', () => {
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );
        const button = screen.getByText('Новый массив');
        fireEvent.click(button);
        const selectionRadio = screen.getByTestId('boobleRadio');
        fireEvent.click(selectionRadio);
        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);
        const columns = screen.getAllByTestId('columns')[0];
        expect(columns).toBeInTheDocument()
    })
    it('Тестирование алгоритмов сортировки выбором, нескольких элементов',() =>{
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );
        const button = screen.getByText('Новый массив');
        fireEvent.click(button);
        const selectionRadio = screen.getByTestId('choseRadio');
        fireEvent.click(selectionRadio);
        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);
        const columns = screen.getAllByTestId('columns')
        expect(columns).not.toHaveLength(0);
    })
    it('Тестирование алгоритмов сортировки пузырьком, нескольких элементов',() =>{
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );
        const button = screen.getByText('Новый массив');
        fireEvent.click(button);
        const selectionRadio = screen.getByTestId('boobleRadio');
        fireEvent.click(selectionRadio);
        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);
        const columns = screen.getAllByTestId('columns')
        expect(columns).not.toHaveLength(0);
    })
    it('Тестирование алгоритмов сортировки выбором по возрастанию', ()=>{
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );

        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const selectionRadio = screen.getByTestId('choseRadio');
        fireEvent.click(selectionRadio);

        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);

        const columns = screen.getAllByTestId('columns');
        const values = columns.map((column) => Number(column.getAttribute('index')));

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeLessThanOrEqual(values[i + 1]);
        }
    })
    it('Тестирование алгоритмов сортировки выбором по убыванию', () =>{
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );

        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const selectionRadio = screen.getByTestId('choseRadio');
        fireEvent.click(selectionRadio);

        const descendingButton = screen.getByTestId('buttonDown');
        fireEvent.click(descendingButton);

        const columns = screen.getAllByTestId('columns');
        const values = columns.map((column) => Number(column.getAttribute('index')));

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeGreaterThanOrEqual(values[i + 1]);
        }
    })
    it('Тестирование алгоритмов сортировки пузырьком по возрастанию',() => {
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );

        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const bubbleRadio = screen.getByTestId('boobleRadio');
        fireEvent.click(bubbleRadio);

        const ascendingButton = screen.getByTestId('buttonUp');
        fireEvent.click(ascendingButton);

        const columns = screen.getAllByTestId('columns');
        const values = columns.map((column) => Number(column.getAttribute('index')));

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeLessThanOrEqual(values[i + 1]);
        }
    })
    it('Тестирование алгоритмов сортировки пузырьком по убыванию', () =>{
        render(
            <MemoryRouter>
                <SortingPage />
            </MemoryRouter>
        );

        const button = screen.getByText('Новый массив');
        fireEvent.click(button);

        const selectionRadio = screen.getByTestId('boobleRadio');
        fireEvent.click(selectionRadio);

        const descendingButton = screen.getByTestId('buttonDown');
        fireEvent.click(descendingButton);

        const columns = screen.getAllByTestId('columns');
        const values = columns.map((column) => Number(column.getAttribute('index')));

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeGreaterThanOrEqual(values[i + 1]);
        }
    })

})
import React from 'react';
import {render, fireEvent, waitFor,screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { StringComponent } from './string';


describe("String", () => {
    it("Корректно разворачивает строку с чётным количеством символов",  () => {
        render(
            <MemoryRouter>
                <StringComponent />
            </MemoryRouter>
        );

        const input = screen.getByTestId("Input");
        const button = screen.getByTestId("button");

        fireEvent.change(input, { target: { value: "hello1" } });
        fireEvent.click(button);

         waitFor(() => {
            const circles = screen.getAllByTestId("circle");
            expect(circles.map((circle) => circle.textContent)).toEqual([
                "1",
                "o",
                "l",
                "l",
                "e",
                "h",
            ]);
        }, {timeout: 1000});
    });
    it("Корректно разворачивает строку с не чётным количеством символов",  () => {
        render(
            <MemoryRouter>
                <StringComponent />
            </MemoryRouter>
        );

        const input = screen.getByTestId("Input");
        const button = screen.getByTestId("button");

        fireEvent.change(input, { target: { value: "hello" } });
        fireEvent.click(button);

        waitFor(() => {
            const circles = screen.getAllByTestId("circle");
            expect(circles.map((circle) => circle.textContent)).toEqual([
                "o",
                "l",
                "l",
                "e",
                "h",
            ]);
        }, {timeout: 1000});
    });
    it("Корректно разворачивает строку одним символом",  () => {
        render(
            <MemoryRouter>
                <StringComponent />
            </MemoryRouter>
        );

        const input = screen.getByTestId("Input");
        const button = screen.getByTestId("button");

        fireEvent.change(input, { target: { value: "h" } });
        fireEvent.click(button);

        waitFor(() => {
            const circles = screen.getAllByTestId("circle");
            expect(circles.map((circle) => circle.textContent)).toEqual([
                "h",
            ]);
        }, {timeout: 1000});
    });
    it("пустая строка",  () => {
        render(
            <MemoryRouter>
                <StringComponent />
            </MemoryRouter>
        );

        const input = screen.getByTestId("Input");
        const button = screen.getByTestId("button");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(button);

        waitFor(() => {
            const circles = screen.getAllByTestId("circle");
            expect(circles.map((circle) => circle.textContent)).toEqual([
                "",
            ]);
        }, {timeout: 1000});
    });


});

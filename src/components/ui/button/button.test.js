import React from "react";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import {Button} from "./button";

afterEach(() => {
    cleanup();
});

describe('Button', () => {
    it('Рендер кнопки с текстом', () => {
        const buttonText = "Click me";
        const { container } = render(<Button text={buttonText} />);
        expect(container).toMatchSnapshot();
    });
    it('Рендер кнопки без текста', () => {
        const { container } = render(<Button/>);
        expect(container).toMatchSnapshot();
    })
    it('Рендер заблокированной кнопки', () => {
        const { container } = render(<Button disabled={true}/>);
        expect(container).toMatchSnapshot();
    })
    it('Рендер кнопки с индикацией загрузки',  () => {
        const { container } = render(<Button isLoader={true}/>);
        expect(container).toMatchSnapshot();
    });
    it('Колбек при клике на кнопку', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} />)
        fireEvent.click(screen.getByRole('button'))
        expect(onClick).toHaveBeenCalled()
    });
});
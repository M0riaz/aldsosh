import {Circle} from "./circle";
import {cleanup, render} from "@testing-library/react";
import React from "react";
import {ElementStates} from "../../../types/element-states";


afterEach(() => {
    cleanup();
});

describe('Circle', () => {
    it('рендер circle c буквами',  () => {
        const circleText = 'Text test';
        const { container } = render(<Circle letter={circleText} />);
        expect(container).toMatchSnapshot();
    });

    it('Рендер circle без букв', () => {
        const { container } = render(<Circle/>);
        expect(container).toMatchSnapshot();
    })
    it('с head', () => {
        const headText = 'head'
        const {container} = render(<Circle head={headText}/>)
        expect(container).toMatchSnapshot()
    });
    it('с react-элементом в head', () => {
        const {container} = render(<Circle head={<Circle/>}/>)
        expect(container).toMatchSnapshot()
    })
    it('с tail',  () => {
        const tailText = 'tail'
        const {container} = render(<Circle tail={tailText}/>)
        expect(container).toMatchSnapshot()
    });
    it('с react-элементом в tail', () => {
        const {container} = render(<Circle tail={<Circle/>}/>)
        expect(container).toMatchSnapshot()
    })
    it('с index', () => {
        const index = 1
        const {container} = render(<Circle index={index}/>)
        expect(container).toMatchSnapshot()
    })
    it('с пропом isSmall ===  true',  () => {
        const {container} = render(<Circle isSmall={true}/>)
        expect(container).toMatchSnapshot()
    });
    it('в состоянии default', () => {
        const {container} = render(<Circle state={ElementStates.Default}/>)
        expect(container).toMatchSnapshot()
    })
    it('в состоянии modified', () => {
        const {container} = render(<Circle state={ElementStates.Modified}/>)
        expect(container).toMatchSnapshot()
    })
    it('в состоянии changing', () => {
        const {container} = render(<Circle state={ElementStates.Changing}/>)
        expect(container).toMatchSnapshot()
    })
})

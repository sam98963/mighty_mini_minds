import { MemoryRouter, Route, Routes } from "react-router";
import { describe, it, expect } from 'vitest';
import AddEntry from "../pages/AddEntry";
import { render } from '@testing-library/react';

it('check_question_renders', () => {
    const questions = {postive_question: '?'}
    const {getByText} = render(<MemoryRouter initialEntries={['/AppLayout/']}>
        <AddEntry context={[questions, entryId, setEntryId]}/>
        </MemoryRouter>);
        const firstQuestion = getByText("?");
        expect(firstQuestion).toBeInTheDocument();
});
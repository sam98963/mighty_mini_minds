
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from "react-router";
import ReminderQuote from "../components/ReminderQuote";
import Journal from '../pages/Journal';


test('Test to see if entry displays', () => {
  const {getByTestId} = render(
    <MemoryRouter initialEntries={['/AppLayout/journal']}>
      <Journal />
    </MemoryRouter>
  );
  const response1 = getByTestId("journal-entry-1")
  expect(response1).not.toBeEmptyDOMElement();
});
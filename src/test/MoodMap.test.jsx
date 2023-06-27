import MoodMap from "../pages/MoodMap";
import Emoji from "../components/Emoji";
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from "react-router";

// Tests that all components render without crashing
it('test_render_components', () => {
  render(<MoodMap />);
  const emoji = screen.getByID('emoji-component');
  expect(emoji).toBeInTheDocument();
  
});

test('test_render_components2', () => {
  render(
    <MemoryRouter initialEntries={['/AppLayout']}>
      <MoodMap />
    </MemoryRouter>
  );
  const emoji = screen.getByTestId('emoji-component');
  expect(emoji).toBeInTheDocument();
});

describe("My app", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter initialEntries={['/AppLayout']}>
        <Routes>
          <Route path="moodMap" element={<MoodMap />}>
          <Emoji/>
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });
});



// expect(screen.getByText('My Week')).toBeInTheDocument();
  // expect(screen.getByText('😊')).toBeInTheDocument();
  // expect(screen.getByText('🙁')).toBeInTheDocument();
  // expect(screen.getByText('🙃')).toBeInTheDocument();
  // expect(screen.getByText('😐')).toBeInTheDocument();
  // expect(screen.getByText('😢')).toBeInTheDocument();
  // expect(screen.getByText('😁')).toBeInTheDocument();
  // expect(screen.getByText('😍')).toBeInTheDocument();
  // expect(screen.getByText('Word of The Day')).toBeInTheDocument();
  // expect(screen.getByText(/"/)).toBeInTheDocument();


  
// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });
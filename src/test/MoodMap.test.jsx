import MoodMap from "../pages/MoodMap";
import Emoji from "../components/Emoji";
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Tests that all components render without crashing
it('test_render_components', () => {
  render(<MoodMap />);
  const emoji = screen.getByTestId('emoji-component');
  expect(emoji).toBeInTheDocument();
  
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
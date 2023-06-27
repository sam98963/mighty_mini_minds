import MoodMap from "../pages/MoodMap";
import AnimatedAvatar from "../components/AnimatedAvatar";
import Emoji from "../components/Emoji";
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from "react-router";
import ReminderQuote from "../components/ReminderQuote";




  //   // Tests that the correct emoji is displayed for each day of the week
  //   it('test_emoji_display', () => {
  //     const { getByTestId } = render(<MemoryRouter initialEntries={['/AppLayout']}>
  //           <MoodMap />
  //          </MemoryRouter>);
  //     expect(getByTestId('emoji-component')).toHaveTextContent('😊');
  // });


it('test_emoji_display2', () => {
     const {getByText} = render(<MemoryRouter initialEntries={['/AppLayout/moodMap']}>
          <Emoji 
          mon={"😊"}
          tue={"🙁"}
          wed={"😐"}
          thu={"😐"}
          fri={"🙁"}
          sat={"😁"}
          sun={"😁"}/>
         </MemoryRouter>);
         const emojiElement = getByText("😊");
         expect(emojiElement).toBeInTheDocument();;
    
});

it('image renders on animated avatar component', () => {
  const {getByTestId} = render(<MemoryRouter initialEntries={['/AppLayout/moodMap']}>
       <AnimatedAvatar />
      </MemoryRouter>);
      const animation = getByTestId("animated-avatar")
      expect(animation).toBeInTheDocument();
});



test('h1_renders_in_moodmap', () => {
  render(
    <MemoryRouter initialEntries={['/AppLayout']}>
      <MoodMap />
    </MemoryRouter>
  );
  const h1 = screen.getByTestId('h1');
  expect(h1).toBeInTheDocument();
});




test('Test to see if quotes display', () => {
  const {getByTestId} = render(
    <MemoryRouter initialEntries={['/AppLayout/moodMap']}>
      <ReminderQuote />
    </MemoryRouter>
  );
  const reminder = screen.getByTestId('reminder');
  expect(reminder).not.toBeEmptyDOMElement();

});













// Tests that all components render without crashing
// it('test_render_components', () => {
//   render(<MoodMap />);
//   const emoji = screen.getByID('emoji-component');
//   expect(emoji).toBeInTheDocument();
  
// });










  

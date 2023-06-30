import MoodMap from "../pages/MoodMap";
import AnimatedAvatar from "../components/AnimatedAvatar";
import Emoji from "../components/Emoji";
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from "react-router";
import ReminderQuote from "../components/ReminderQuote";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


  //   // Tests that the correct emoji is displayed for each day of the week
  //   it('test_emoji_display', () => {
  //     const { getByTestId } = render(<MemoryRouter initialEntries={['/AppLayout']}>
  //           <MoodMap />
  //          </MemoryRouter>);
  //     expect(getByTestId('emoji-component')).toHaveTextContent('😊');
  // });


it('test_emoji_display and test date display', () => {
  const entry = {id:"12345", mood:4, createdAt: "2023-06-28T09:44:22.779Z"}
     const {getByText} = render(<MemoryRouter initialEntries={['/AppLayout/moodMap']}>
          <Emoji 
            key={entry.id}
            mood={entry.mood} 
            date={new Date(entry.createdAt).toLocaleString('en-GB', {
          weekday: 'short',})}/>
         </MemoryRouter>);
         const emojiElement = getByText("😁");
         const dateElement = getByText("Wed")
         expect(emojiElement).toBeInTheDocument();
         expect(dateElement).toBeInTheDocument();

});

const queryClient = new QueryClient();

it('image renders on animated avatar component', () => {
  const {getByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/AppLayout/moodMap']}>
        <AnimatedAvatar />
      </MemoryRouter>
    </QueryClientProvider>
  );

  const animation = getByTestId("animated-avatar")
  expect(animation).toBeInTheDocument();
});


test('h1_renders_in_moodmap', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/AppLayout']}>
        <MoodMap />
      </MemoryRouter>
    </QueryClientProvider>
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

// it('word_of_the_day_component_exists', () => {
//   render(
//     <QueryClientProvider client={queryClient}>
//       <MemoryRouter initialEntries={['/AppLayout/moodMap']}>
//         <MoodMap />
//       </MemoryRouter>
//     </QueryClientProvider>
//   );

//   const wordOfTheDay = screen.getByTestId('word-of-the-day');
//   expect(wordOfTheDay).toBeInTheDocument();
// });











// Tests that all components render without crashing
// it('test_render_components', () => {
//   render(<MoodMap />);
//   const emoji = screen.getByID('emoji-component');
//   expect(emoji).toBeInTheDocument();
  
// });










  

import WelcomePage from "../pages/WelcomePage";
import AppLayout from "../pages/AppLayout";
import { render, fireEvent } from '@testing-library/react';
import { useOutletContext } from "react-router";
 
it("test_click_mood_button_updates_mood_state",() => {
    const { getByText } = render(<WelcomePage />);
    const moodButton = getByText('🙁');
    fireEvent.click(moodButton);
    const moodState = screen.getByText('Welcome, Sofia!').nextSibling;
    expect(moodState.textContent).toBe('1');
})

// First test - no mood, will not call mutate
// it('test_click_submit_with_no_mood_selected_does_not_call_mutate_function', () => {
//   const { getByText } = render(<WelcomePage />);
//   const submitButton = getByText('Go!');
//   const mutate = jest.fn();
//   // this tracks another function (axios call) - while test runs on Welcome Page
//   jest.spyOn(axios, 'post').mockResolvedValue({ data: { share: false } });
//   fireEvent.click(submitButton);
//   expect(mutate).not.toHaveBeenCalled();
// });



// it('renders correct button classes based on mood state', () => {
// render(<AppLayout />); 
//   const { getByText } = render(<WelcomePage />);
//   const sadButton = getByText('🙁');
//   const neutralButton = getByText('😐');
//   const happyButton = getByText('🙂');

//   expect(sadButton).toHaveClass(mood === '1' ? 'animate-pulse' : '');
//   expect(neutralButton).toHaveClass(mood === '3' ? 'animate-pulse' : '');
//   expect(happyButton).toHaveClass(mood === '4' ? 'animate-pulse' : '');
// });









// state defined as null --> hence cannot interate through
// it('test_click_submit_calls_mutate_with_correct_entry_object', () => {
    //     const { getByText } = render(<WelcomePage />);
    //     const moodButton = getByText('🙁');
    //     fireEvent.click(moodButton);
    //     const submitButton = getByText('Go!');
    //     const mutate = jest.fn();
    //     const setEntryId = jest.fn();
    //     const useStateSpy = jest.spyOn(React, 'useState');
    //     useStateSpy.mockImplementation((init) => [init, setEntryId]);
    //     useMutation.mockReturnValue({ mutate });
    //     fireEvent.click(submitButton);
    //     expect(mutate).toHaveBeenCalledWith({ mood: 1, share: false });
    // });
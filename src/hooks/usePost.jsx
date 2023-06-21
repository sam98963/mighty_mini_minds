import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost() {
    return useMutation({
      mutationFn: async (entry) => {
        const response = await axios.post('https://mighty-mini-minds-backend.onrender.com/entry', entry);
        return response.data;
      },
      // onError: (error) => {
      //   // Handle error
      // },
      // onSuccess: (data) => {
      //   // Handle successful mutation
      // },
      // onSettled: (data, error) => {
      //   // Handle mutation completion (success or error)
      // },
    });
}
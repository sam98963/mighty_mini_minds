import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost() {
    return useMutation({
        queryKey: ['post'],
        mutationFn: async () => {
          const post = await axios.post(`https://mighty-mini-minds-backend.onrender.com/entry`);
          return post;
        },
    });
}
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGet(postId) {
  return useQuery({
    queryKey: ['entries'],
    queryFn: async () => {
      if (!postId) {
        const data = await axios.get('https://mighty-mini-minds-backend.onrender.com/entry');
        return data.data;
      } else {
        const data = await axios.get(`https://mighty-mini-minds-backend.onrender.com/entry/${postId}`);
        return data.data;
      }
    },
  });
}
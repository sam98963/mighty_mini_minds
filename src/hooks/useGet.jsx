import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGet() {
  const userUuid = localStorage.getItem('userId');
  

  return useQuery({
    queryKey: ['entries'],
    queryFn: async () => {
      const url = `https://mighty-mini-minds-backend.onrender.com/entries/${userUuid}`;
      const response = await axios.get(
        url.replace(/"/g, ''));
      return response.data;
    },
  });
}



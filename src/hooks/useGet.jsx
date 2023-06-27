import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGet() {
  return useQuery({
    queryKey: ['entries'],
    queryFn: async () => {
      const response = await axios.get(
        'https://mighty-mini-minds-backend.onrender.com');

      return response.data;
    },
  });
}

// const token = localStorage.getItem('tokenData');
      // console.log('Token:', token);
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('tokenData')}`,
      //   },
      // };

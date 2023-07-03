import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetUser() {
  const userUuid = localStorage.getItem('userId');

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const url = `https://mighty-mini-minds-backend.onrender.com/users/${userUuid}`;
      const response = await axios.get(
        url.replace(/"/g, ''));
      return response.data;
    },
  });
}
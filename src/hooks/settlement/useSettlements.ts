import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export const useSettlements = () => {
  return useQuery({
    queryKey: ['settlements'],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.SETTLEMENT.PENDING);
      return response.data;
    },
  });
};
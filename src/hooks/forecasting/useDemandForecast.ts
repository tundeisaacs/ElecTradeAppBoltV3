import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export interface DemandForecast {
  timestamp: string;
  demand: number;
  peakProbability: number;
  category: 'low' | 'medium' | 'high';
}

export const useDemandForecast = () => {
  return useQuery({
    queryKey: ['forecast', 'demand'],
    queryFn: async (): Promise<DemandForecast[]> => {
      const response = await api.get(API_ENDPOINTS.FORECASTING.DEMAND);
      return response.data;
    },
  });
};
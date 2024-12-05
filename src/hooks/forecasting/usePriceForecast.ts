import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export interface PriceForecast {
  timestamp: string;
  price: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
}

export const usePriceForecast = () => {
  return useQuery({
    queryKey: ['forecast', 'price'],
    queryFn: async (): Promise<PriceForecast[]> => {
      const response = await api.get(API_ENDPOINTS.FORECASTING.PRICE);
      return response.data;
    },
  });
};
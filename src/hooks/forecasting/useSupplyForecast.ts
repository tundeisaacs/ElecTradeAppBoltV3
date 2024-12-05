import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export interface SupplyForecast {
  timestamp: string;
  supply: number;
  renewablePercentage: number;
  sources: {
    solar: number;
    wind: number;
    hydro: number;
    other: number;
  };
}

export const useSupplyForecast = () => {
  return useQuery({
    queryKey: ['forecast', 'supply'],
    queryFn: async (): Promise<SupplyForecast[]> => {
      const response = await api.get(API_ENDPOINTS.FORECASTING.SUPPLY);
      return response.data;
    },
  });
};
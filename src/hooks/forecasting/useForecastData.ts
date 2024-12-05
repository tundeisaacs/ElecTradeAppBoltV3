import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export const useForecastData = () => {
  return useQuery({
    queryKey: ['forecast'],
    queryFn: async () => {
      const [priceResponse, demandResponse, supplyResponse] = await Promise.all([
        api.get(API_ENDPOINTS.FORECASTING.PRICE),
        api.get(API_ENDPOINTS.FORECASTING.DEMAND),
        api.get(API_ENDPOINTS.FORECASTING.SUPPLY),
      ]);

      return {
        price: priceResponse.data,
        demand: demandResponse.data,
        supply: supplyResponse.data,
      };
    },
  });
};
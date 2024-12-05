import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';

export interface Settlement {
  id: string;
  tradeDate: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  counterparty: string;
}

export const useSettlementActions = () => {
  const queryClient = useQueryClient();

  const processSettlement = useMutation({
    mutationFn: async (settlementId: string) => {
      const response = await api.post(API_ENDPOINTS.SETTLEMENT.EXECUTE, { settlementId });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settlements'] });
    },
  });

  return {
    processSettlement,
  };
};
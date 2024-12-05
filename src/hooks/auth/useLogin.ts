import { useMutation } from '@tanstack/react-query';
import api from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/config/api.config';
import { useAuthStore } from '@/stores/authStore';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
      return response.data;
    },
    onSuccess: (data) => {
      setTokens(data.token, data.refreshToken);
    },
  });
};
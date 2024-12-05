export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  TRADING: {
    EXECUTE: '/trading/execute',
    ORDER_BOOK: '/trading/orderbook',
  },
  MARKETS: {
    LIST: '/markets',
    DETAILS: (id: string) => `/markets/${id}`,
  },
  PORTFOLIO: {
    SUMMARY: '/portfolio/summary',
    POSITIONS: '/portfolio/positions',
    PERFORMANCE: '/portfolio/performance',
  },
  FORECASTING: {
    PRICE: '/forecasting/price',
    DEMAND: '/forecasting/demand',
    SUPPLY: '/forecasting/supply',
  },
  SETTLEMENT: {
    PENDING: '/settlement/pending',
    HISTORY: '/settlement/history',
    EXECUTE: '/settlement/execute',
  },
};
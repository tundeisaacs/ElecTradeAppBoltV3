export interface Order {
  id: string;
  type: 'buy' | 'sell';
  price: number;
  amount: number;
  timestamp: number;
  userId: string;
  status: 'pending' | 'filled' | 'partially_filled' | 'cancelled';
  remainingAmount: number;
}

export interface Trade {
  id: string;
  buyOrderId: string;
  sellOrderId: string;
  price: number;
  amount: number;
  timestamp: number;
}
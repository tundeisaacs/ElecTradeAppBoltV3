import { useState } from 'react';
import { Order } from '../types/trading';
import { orderBookService } from '../services/OrderBookService';

export const useTrading = () => {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const placeOrder = () => {
    if (!amount || !price) return;

    const order: Order = {
      id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: orderType,
      price: parseFloat(price),
      amount: parseFloat(amount),
      remainingAmount: parseFloat(amount),
      timestamp: Date.now(),
      userId: 'user-1', // In a real app, this would come from auth
      status: 'pending',
    };

    orderBookService.addOrder(order);
    setAmount('');
    setPrice('');
  };

  return {
    orderType,
    setOrderType,
    amount,
    setAmount,
    price,
    setPrice,
    placeOrder,
    orderBook: orderBookService.getOrderBook(),
  };
};
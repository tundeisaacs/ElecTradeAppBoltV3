import React from 'react';
import { useTrading } from '../hooks/useTrading';

const OrderBook = () => {
  const { orderBook } = useTrading();
  const { buyOrders, sellOrders } = orderBook;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Book</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Buy Orders</h3>
          <div className="space-y-2">
            {buyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-green-50 p-2 rounded-lg text-sm"
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">{order.amount} kWh</span>
                  <span className="text-green-700">€{order.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Sell Orders</h3>
          <div className="space-y-2">
            {sellOrders.map((order) => (
              <div
                key={order.id}
                className="bg-red-50 p-2 rounded-lg text-sm"
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">{order.amount} kWh</span>
                  <span className="text-red-700">€{order.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
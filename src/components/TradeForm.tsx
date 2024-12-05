import React from 'react';
import { Zap, ArrowUpDown } from 'lucide-react';
import { useTrading } from '../hooks/useTrading';

const TradeForm = () => {
  const {
    orderType,
    setOrderType,
    amount,
    setAmount,
    price,
    setPrice,
    placeOrder,
  } = useTrading();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Place Order</h2>
      
      <div className="space-y-4">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          <button
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              orderType === 'buy'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setOrderType('buy')}
          >
            Buy
          </button>
          <button
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              orderType === 'sell'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setOrderType('sell')}
          >
            Sell
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (kWh)
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter amount"
            />
            <Zap className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (€/kWh)
          </label>
          <div className="relative">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter price"
              step="0.001"
            />
            <ArrowUpDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg flex items-start">
          <p className="text-sm text-blue-700">
            Total Value: €{((parseFloat(amount) || 0) * (parseFloat(price) || 0)).toFixed(2)}
          </p>
        </div>

        <button
          onClick={placeOrder}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
            orderType === 'buy'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Place {orderType === 'buy' ? 'Buy' : 'Sell'} Order
        </button>
      </div>
    </div>
  );
};

export default TradeForm;
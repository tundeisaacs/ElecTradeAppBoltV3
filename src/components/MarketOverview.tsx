import React from 'react';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

const MarketOverview = () => {
  const markets = [
    { name: 'Spot Market', price: '0.142', change: '+2.4%', volume: '234.5 MWh', trend: 'up' },
    { name: 'Forward Market', price: '0.138', change: '-1.2%', volume: '456.7 MWh', trend: 'down' },
    { name: 'Intraday Market', price: '0.145', change: '+3.1%', volume: '123.4 MWh', trend: 'up' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {markets.map((market) => (
        <div key={market.name} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{market.name}</h3>
              <div className="mt-1 flex items-center">
                <span className="text-2xl font-bold">€{market.price}</span>
                <span className="ml-2 text-sm">/kWh</span>
              </div>
            </div>
            {market.trend === 'up' ? (
              <TrendingUp className="h-6 w-6 text-green-500" />
            ) : (
              <TrendingDown className="h-6 w-6 text-red-500" />
            )}
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-gray-600">24h Volume</span>
            </div>
            <span className="font-medium">{market.volume}</span>
          </div>
          
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-gray-600">24h Change</span>
            <span className={market.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
              {market.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketOverview;
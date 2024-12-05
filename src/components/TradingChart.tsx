import React from 'react';
import { LineChart, Activity, TrendingUp, TrendingDown } from 'lucide-react';

const TradingChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Market Overview</h2>
        <div className="flex gap-2">
          <span className="flex items-center text-green-500">
            <TrendingUp className="w-4 h-4 mr-1" />
            +2.4%
          </span>
          <LineChart className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <Activity className="w-32 h-32 text-gray-300" />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {['1H', '24H', '7D'].map((period) => (
          <div key={period} className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">{period}</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="font-semibold">€0.142/kWh</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingChart;
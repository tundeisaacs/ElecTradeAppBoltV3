import React from 'react';
import { PieChart, BarChart, ArrowRight, Wallet } from 'lucide-react';

const Portfolio = () => {
  const assets = [
    { type: 'Solar Credits', amount: '1,234 kWh', value: '€175.23', change: '+5.2%' },
    { type: 'Wind Credits', amount: '2,567 kWh', value: '€354.24', change: '-2.1%' },
    { type: 'Hydro Credits', amount: '892 kWh', value: '€129.34', change: '+1.8%' },
  ];

  const recentTransactions = [
    { id: 1, type: 'Buy', asset: 'Solar Credits', amount: '500 kWh', price: '€71.50', date: '2024-03-15' },
    { id: 2, type: 'Sell', asset: 'Wind Credits', amount: '300 kWh', price: '€41.40', date: '2024-03-14' },
    { id: 3, type: 'Buy', asset: 'Hydro Credits', amount: '200 kWh', price: '€29.00', date: '2024-03-13' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Portfolio Overview</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.type} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{asset.type}</h3>
                  <p className="text-sm text-gray-500">{asset.amount}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{asset.value}</p>
                  <p className={`text-sm ${asset.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Performance</h2>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">€658.81</p>
              <p className="text-sm text-green-600">+2.4% (24h)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${transaction.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.asset}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
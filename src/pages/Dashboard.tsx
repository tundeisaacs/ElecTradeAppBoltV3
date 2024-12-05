import React from 'react';
import TradingChart from '../components/TradingChart';
import TradeForm from '../components/TradeForm';
import MarketOverview from '../components/MarketOverview';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <TradingChart />
        <MarketOverview />
      </div>
      <div className="lg:col-span-1">
        <TradeForm />
      </div>
    </div>
  );
};

export default Dashboard;
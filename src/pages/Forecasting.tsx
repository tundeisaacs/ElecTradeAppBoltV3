import React from 'react';
import { TrendingUp, Wind, Sun } from 'lucide-react';
import { usePriceForecast } from '@/hooks/forecasting/usePriceForecast';
import { useDemandForecast } from '@/hooks/forecasting/useDemandForecast';
import { useSupplyForecast } from '@/hooks/forecasting/useSupplyForecast';
import ForecastCard from '@/components/forecasting/ForecastCard';

const Forecasting = () => {
  const { data: priceData, isLoading: isPriceLoading } = usePriceForecast();
  const { data: demandData, isLoading: isDemandLoading } = useDemandForecast();
  const { data: supplyData, isLoading: isSupplyLoading } = useSupplyForecast();

  const isLoading = isPriceLoading || isDemandLoading || isSupplyLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const latestPrice = priceData?.[0];
  const latestDemand = demandData?.[0];
  const latestSupply = supplyData?.[0];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Energy Market Forecasting</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ForecastCard
          title="Price Forecast"
          icon={TrendingUp}
          iconColor="text-blue-500"
        >
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gray-900">
              €{latestPrice?.price.toFixed(3)}/kWh
            </div>
            <div className={`text-sm ${
              latestPrice?.trend === 'up' ? 'text-green-600' : 
              latestPrice?.trend === 'down' ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              Trend: {latestPrice?.trend.toUpperCase()}
            </div>
            <div className="text-sm text-gray-600">
              Confidence: {latestPrice?.confidence}%
            </div>
          </div>
        </ForecastCard>

        <ForecastCard
          title="Demand Forecast"
          icon={Wind}
          iconColor="text-green-500"
        >
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gray-900">
              {latestDemand?.demand.toFixed(1)} MWh
            </div>
            <div className="text-sm text-gray-600">
              Peak Probability: {latestDemand?.peakProbability}%
            </div>
            <div className={`text-sm ${
              latestDemand?.category === 'high' ? 'text-red-600' :
              latestDemand?.category === 'medium' ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              Category: {latestDemand?.category.toUpperCase()}
            </div>
          </div>
        </ForecastCard>

        <ForecastCard
          title="Supply Forecast"
          icon={Sun}
          iconColor="text-yellow-500"
        >
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gray-900">
              {latestSupply?.supply.toFixed(1)} MWh
            </div>
            <div className="text-sm text-green-600">
              Renewable: {latestSupply?.renewablePercentage}%
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Solar: {latestSupply?.sources.solar}%</div>
              <div>Wind: {latestSupply?.sources.wind}%</div>
              <div>Hydro: {latestSupply?.sources.hydro}%</div>
              <div>Other: {latestSupply?.sources.other}%</div>
            </div>
          </div>
        </ForecastCard>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Market Insights</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900">Price Analysis</h3>
            <p className="text-blue-700 mt-1">
              {latestPrice?.trend === 'up' 
                ? 'Prices are trending upward. Consider securing long-term contracts.'
                : latestPrice?.trend === 'down'
                ? 'Prices are declining. Good opportunity for spot market purchases.'
                : 'Market prices are stable.'}
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900">Demand Outlook</h3>
            <p className="text-green-700 mt-1">
              {latestDemand?.category === 'high'
                ? 'High demand expected. Prepare for peak pricing.'
                : latestDemand?.category === 'medium'
                ? 'Moderate demand levels expected.'
                : 'Low demand period forecasted.'}
            </p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-900">Supply Status</h3>
            <p className="text-yellow-700 mt-1">
              Renewable energy contributing {latestSupply?.renewablePercentage}% of total supply.
              {latestSupply?.renewablePercentage > 60
                ? ' High renewable availability.'
                : ' Moderate renewable contribution.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;
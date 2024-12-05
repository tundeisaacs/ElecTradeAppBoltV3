import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ForecastCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  children: React.ReactNode;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  title,
  icon: Icon,
  iconColor,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      {children}
    </div>
  );
};

export default ForecastCard;
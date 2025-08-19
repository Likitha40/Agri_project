import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PriceResult {
  crop: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  lastUpdated: string;
}

const CropPriceFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<PriceResult | null>(null);
  const { t } = useLanguage();

  const mockPrices = [
    { crop: 'Rice', price: 45, trend: 'up' as const, change: 5, lastUpdated: '2 hours ago' },
    { crop: 'Wheat', price: 32, trend: 'down' as const, change: -3, lastUpdated: '1 hour ago' },
    { crop: 'Tomato', price: 28, trend: 'up' as const, change: 8, lastUpdated: '30 minutes ago' },
    { crop: 'Onion', price: 35, trend: 'stable' as const, change: 0, lastUpdated: '1 hour ago' },
    { crop: 'Potato', price: 22, trend: 'up' as const, change: 2, lastUpdated: '45 minutes ago' }
  ];

  const searchPrices = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      const randomResult = mockPrices[Math.floor(Math.random() * mockPrices.length)];
      setResult({
        ...randomResult,
        crop: searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1).toLowerCase()
      });
      setIsSearching(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPrices();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="flex items-center mb-6">
        <DollarSign className="h-8 w-8 text-green-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{t('cropPriceFinder')}</h2>
          <p className="text-gray-600">{t('cropPriceFinderDesc')}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Search Input */}
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('searchCrop')}
              className="w-full px-4 py-3 pl-12 border-2 border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="h-5 w-5 text-green-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
          <button
            onClick={searchPrices}
            disabled={!searchQuery.trim() || isSearching}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              !searchQuery.trim() || isSearching
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white transform hover:scale-105'
            }`}
          >
            {isSearching ? (
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 animate-spin" />
                <span className="hidden sm:inline">{t('searchingPrices')}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">{t('findPrices')}</span>
              </div>
            )}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{result.crop}</h3>
              <div className="flex items-center space-x-2">
                {result.trend === 'up' ? (
                  <TrendingUp className="h-6 w-6 text-green-600" />
                ) : result.trend === 'down' ? (
                  <TrendingDown className="h-6 w-6 text-red-600" />
                ) : (
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                )}
                <span className={`font-semibold ${
                  result.trend === 'up' ? 'text-green-600' : 
                  result.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {result.change > 0 ? '+' : ''}{result.change}%
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{t('currentPrice')}</p>
                <p className="text-3xl font-bold text-green-700">
                  {t('pricePerKg').replace('{price}', result.price.toString())}
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{t('marketTrend')}</p>
                <div className="flex items-center space-x-2">
                  {result.trend === 'up' && (
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-5 w-5 mr-1" />
                      <span className="font-semibold">Rising</span>
                    </div>
                  )}
                  {result.trend === 'down' && (
                    <div className="flex items-center text-red-600">
                      <TrendingDown className="h-5 w-5 mr-1" />
                      <span className="font-semibold">Falling</span>
                    </div>
                  )}
                  {result.trend === 'stable' && (
                    <div className="flex items-center text-gray-600">
                      <div className="w-5 h-5 mr-1 bg-gray-400 rounded-full"></div>
                      <span className="font-semibold">Stable</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">
                {t('lastUpdated').replace('{time}', result.lastUpdated)}
              </span>
            </div>
          </div>
        )}

        {/* Popular Crops Quick Access */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {['Rice', 'Wheat', 'Tomato', 'Onion', 'Potato'].map((crop) => (
            <button
              key={crop}
              onClick={() => {
                setSearchQuery(crop);
                setTimeout(() => searchPrices(), 100);
              }}
              className="p-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              {crop}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropPriceFinder;
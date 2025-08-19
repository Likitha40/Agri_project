import React from 'react';
import { Brain, BarChart3, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('aiPowered'),
      description: t('aiPoweredDesc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: t('realTimeData'),
      description: t('realTimeDataDesc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: t('multiLanguage'),
      description: t('multiLanguageDesc'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: t('easyToUse'),
      description: t('easyToUseDesc'),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('featuresTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
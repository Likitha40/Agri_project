import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Users className="h-16 w-16 text-white mx-auto mb-6 opacity-90" />
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('getStarted')}
        </h2>
        <p className="text-xl text-green-100 mb-8 leading-relaxed">
          {t('getStartedDesc')}
        </p>
        <button className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
          <span>{t('getStarted')}</span>
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
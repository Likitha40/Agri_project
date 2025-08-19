import React from 'react';
import { Leaf, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-xl">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">{t('appName')}</h3>
          </div>
          
          <div className="flex items-center space-x-2 text-green-200">
            <span>{t('footer')}</span>
            <Heart className="h-4 w-4 text-red-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
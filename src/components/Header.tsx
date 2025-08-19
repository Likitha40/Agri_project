import React, { useState } from 'react';
import { Leaf, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'hi' as Language, name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'te' as Language, name: 'తెలుగు', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                {t('appName')}
              </h1>
              <p className="text-sm text-green-600 hidden sm:block">
                {t('tagline')}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg border border-green-200 transition-colors duration-200"
            >
              <Globe className="h-4 w-4 text-green-600" />
              <span className="text-green-700 font-medium">
                {currentLanguage?.flag} {currentLanguage?.name}
              </span>
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-green-800 border-b border-green-100">
                    {t('selectLanguage')}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-green-50 transition-colors duration-200 ${
                        language === lang.code ? 'bg-green-100 text-green-800' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
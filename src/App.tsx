import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import VoiceAssistant from './components/VoiceAssistant';
import PlantDiseaseScanner from './components/PlantDiseaseScanner';
import CropPriceFinder from './components/CropPriceFinder';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('appName')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>
          
          {/* Voice Assistant */}
          <div className="mb-16">
            <VoiceAssistant />
          </div>
          
          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PlantDiseaseScanner />
            <CropPriceFinder />
          </div>
        </div>
      </section>
      
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
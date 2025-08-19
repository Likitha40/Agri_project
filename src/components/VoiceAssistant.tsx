import React, { useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { t } = useLanguage();

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      // Simulate listening for 3 seconds
      setTimeout(() => {
        setIsListening(false);
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 2000);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Volume2 className="h-8 w-8 mr-3" />
          <h2 className="text-3xl font-bold">{t('voiceAssistant')}</h2>
        </div>
        
        <div className="mb-8">
          <button
            onClick={toggleListening}
            className={`relative w-24 h-24 rounded-full border-4 border-white/30 flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
              isListening 
                ? 'bg-red-500 animate-pulse shadow-lg shadow-red-500/50' 
                : isSpeaking
                ? 'bg-blue-500 animate-bounce'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {isListening ? (
              <MicOff className="h-12 w-12 text-white" />
            ) : (
              <Mic className="h-12 w-12 text-white" />
            )}
            
            {isListening && (
              <div className="absolute -inset-2 rounded-full border-4 border-red-300 animate-ping"></div>
            )}
          </button>
        </div>
        
        <p className="text-xl mb-4 opacity-90">
          {isListening ? t('listening') : t('askAnything')}
        </p>
        
        {isSpeaking && (
          <div className="flex justify-center items-center space-x-2 mt-4">
            <div className="w-2 h-8 bg-white rounded-full animate-pulse"></div>
            <div className="w-2 h-12 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-10 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-2 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
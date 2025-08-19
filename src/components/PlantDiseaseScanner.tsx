import React, { useState, useRef } from 'react';
import { Camera, Upload, Scan, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DiseaseResult {
  disease: string;
  confidence: number;
  treatment: string;
  isHealthy: boolean;
}

const PlantDiseaseScanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const mockDiseases = [
    { 
      disease: 'Bacterial Blight', 
      confidence: 87, 
      treatment: 'Use copper-based fungicide spray every 7-10 days',
      isHealthy: false
    },
    { 
      disease: 'Leaf Spot', 
      confidence: 92, 
      treatment: 'Remove infected leaves and apply neem oil spray',
      isHealthy: false
    },
    { 
      disease: 'Healthy Plant', 
      confidence: 95, 
      treatment: 'Continue regular care and monitoring',
      isHealthy: true
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      const randomResult = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="flex items-center mb-6">
        <Camera className="h-8 w-8 text-green-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{t('plantDiseaseScanner')}</h2>
          <p className="text-gray-600">{t('plantDiseaseScannerDesc')}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Image Upload Area */}
        <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50">
          {selectedImage ? (
            <div className="space-y-4">
              <img 
                src={selectedImage} 
                alt="Selected plant" 
                className="max-h-64 mx-auto rounded-lg shadow-md"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
              >
                {t('selectImage')}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-16 w-16 text-green-400 mx-auto" />
              <div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {t('uploadPhoto')}
                </button>
              </div>
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />

        {/* Analyze Button */}
        {selectedImage && !result && (
          <button
            onClick={analyzeImage}
            disabled={isAnalyzing}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              isAnalyzing
                ? 'bg-yellow-100 text-yellow-800 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white transform hover:scale-105'
            }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center space-x-3">
                <Scan className="h-6 w-6 animate-spin" />
                <span>{t('analyzing')}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                <Scan className="h-6 w-6" />
                <span>{t('scanNow')}</span>
              </div>
            )}
          </button>
        )}

        {/* Results */}
        {result && (
          <div className={`rounded-xl p-6 ${result.isHealthy ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
            <div className="flex items-start space-x-4">
              {result.isHealthy ? (
                <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
              ) : (
                <AlertTriangle className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
              )}
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${result.isHealthy ? 'text-green-800' : 'text-orange-800'}`}>
                  {result.isHealthy ? t('healthyPlant') : t('diseaseDetected')}
                </h3>
                {!result.isHealthy && (
                  <p className="text-lg font-semibold text-gray-700 mb-2">{result.disease}</p>
                )}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{t('confidence')}</span>
                    <span className="text-sm font-bold text-gray-800">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${result.confidence > 80 ? 'bg-green-500' : result.confidence > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t('treatment')}:</p>
                  <p className="text-gray-600">{result.treatment}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDiseaseScanner;
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    appName: 'Agriprice',
    tagline: 'Smart Agriculture, Better Prices',
    description: 'Your AI-powered companion for crop disease detection and market price insights',
    voiceAssistant: 'Voice Assistant',
    askAnything: 'Ask me anything about crops, diseases, or prices...',
    listening: 'Listening...',
    plantDiseaseScanner: 'Plant Disease Scanner',
    plantDiseaseScannerDesc: 'Upload a photo of your plant and get instant AI-powered disease detection',
    uploadPhoto: 'Upload Photo',
    scanNow: 'Scan Now',
    cropPriceFinder: 'Crop Price Finder',
    cropPriceFinderDesc: 'Get real-time market prices for your crops and find the best selling opportunities',
    searchCrop: 'Search for a crop...',
    findPrices: 'Find Prices',
    featuresTitle: 'Powerful Features for Modern Farmers',
    aiPowered: 'AI-Powered Analysis',
    aiPoweredDesc: 'Advanced machine learning algorithms for accurate disease detection and price prediction',
    realTimeData: 'Real-time Market Data',
    realTimeDataDesc: 'Access up-to-date crop prices from multiple markets across the country',
    multiLanguage: 'Multi-language Support',
    multiLanguageDesc: 'Available in Telugu, Hindi, and English for better accessibility',
    easyToUse: 'Easy to Use',
    easyToUseDesc: 'Simple interface designed for farmers of all technical backgrounds',
    getStarted: 'Get Started Today',
    getStartedDesc: 'Join thousands of farmers who are already using Agriprice to make better decisions',
    footer: '© 2025 Agriprice. Empowering farmers with technology.',
    selectImage: 'Select an image',
    analyzing: 'Analyzing your plant...',
    diseaseDetected: 'Disease Detected',
    healthyPlant: 'Your plant appears healthy!',
    confidence: 'Confidence',
    treatment: 'Recommended Treatment',
    searchingPrices: 'Searching for prices...',
    currentPrice: 'Current Market Price',
    pricePerKg: '₹{price}/kg',
    marketTrend: 'Market Trend',
    lastUpdated: 'Last updated: {time}',
    selectLanguage: 'Select Language'
  },
  hi: {
    appName: 'एग्रिप्राइस',
    tagline: 'स्मार्ट कृषि, बेहतर मूल्य',
    description: 'फसल रोग की पहचान और बाजार मूल्य की जानकारी के लिए आपका AI-संचालित साथी',
    voiceAssistant: 'वॉयस असिस्टेंट',
    askAnything: 'फसल, रोग या मूल्य के बारे में कुछ भी पूछें...',
    listening: 'सुन रहा है...',
    plantDiseaseScanner: 'पौधे की बीमारी स्कैनर',
    plantDiseaseScannerDesc: 'अपने पौधे की फोटो अपलोड करें और तुरंत AI-संचालित बीमारी की पहचान पाएं',
    uploadPhoto: 'फोटो अपलोड करें',
    scanNow: 'अभी स्कैन करें',
    cropPriceFinder: 'फसल मूल्य खोजक',
    cropPriceFinderDesc: 'अपनी फसलों के लिए वास्तविक समय के बाजार मूल्य प्राप्त करें और सर्वोत्तम बिक्री अवसर खोजें',
    searchCrop: 'फसल खोजें...',
    findPrices: 'मूल्य खोजें',
    featuresTitle: 'आधुनिक किसानों के लिए शक्तिशाली सुविधाएं',
    aiPowered: 'AI-संचालित विश्लेषण',
    aiPoweredDesc: 'सटीक बीमारी की पहचान और मूल्य भविष्यवाणी के लिए उन्नत मशीन लर्निंग एल्गोरिदम',
    realTimeData: 'वास्तविक समय बाजार डेटा',
    realTimeDataDesc: 'देश भर के कई बाजारों से अप-टू-डेट फसल मूल्य तक पहुंच',
    multiLanguage: 'बहु-भाषा समर्थन',
    multiLanguageDesc: 'बेहतर पहुंच के लिए तेलुगु, हिंदी और अंग्रेजी में उपलब्ध',
    easyToUse: 'उपयोग में आसान',
    easyToUseDesc: 'सभी तकनीकी पृष्ठभूमि के किसानों के लिए डिज़ाइन किया गया सरल इंटरफेस',
    getStarted: 'आज ही शुरू करें',
    getStartedDesc: 'हजारों किसानों से जुड़ें जो पहले से ही बेहतर निर्णय लेने के लिए एग्रिप्राइस का उपयोग कर रहे हैं',
    footer: '© 2025 एग्रिप्राइस। प्रौद्योगिकी के साथ किसानों को सशक्त बनाना।',
    selectImage: 'एक छवि चुनें',
    analyzing: 'आपके पौधे का विश्लेषण कर रहे हैं...',
    diseaseDetected: 'बीमारी की पहचान हुई',
    healthyPlant: 'आपका पौधा स्वस्थ दिखाई दे रहा है!',
    confidence: 'आत्मविश्वास',
    treatment: 'अनुशंसित उपचार',
    searchingPrices: 'मूल्य खोज रहे हैं...',
    currentPrice: 'वर्तमान बाजार मूल्य',
    pricePerKg: '₹{price}/किलो',
    marketTrend: 'बाजार का रुझान',
    lastUpdated: 'अंतिम बार अपडेट किया गया: {time}',
    selectLanguage: 'भाषा चुनें'
  },
  te: {
    appName: 'అగ్రిప్రైస్',
    tagline: 'స్మార్ట్ వ్యవసాయం, మెరుగైన ధరలు',
    description: 'పంట వ్యాధి గుర్తింపు మరియు మార్కెట్ ధర అంతర్దృష్టుల కోసం మీ AI-శక్తితో కూడిన సహచరుడు',
    voiceAssistant: 'వాయిస్ అసిస్టెంట్',
    askAnything: 'పంటలు, వ్యాధులు లేదా ధరల గురించి ఏదైనా అడగండి...',
    listening: 'వింటున్నాను...',
    plantDiseaseScanner: 'మొక్క వ్యాధి స్కానర్',
    plantDiseaseScannerDesc: 'మీ మొక్క యొక్క ఫోటోను అప్‌లోడ్ చేసి, తక్షణం AI-శక్తితో వ్యాధి గుర్తింపును పొందండి',
    uploadPhoto: 'ఫోటో అప్‌లోడ్ చేయండి',
    scanNow: 'ఇప్పుడే స్కాన్ చేయండి',
    cropPriceFinder: 'పంట ధర వెతుకుతే',
    cropPriceFinderDesc: 'మీ పంటలకు నిజ-సమయ మార్కెట్ ధరలను పొందండి మరియు అత్యుత్తమ విక్రయ అవకాశాలను కనుగొనండి',
    searchCrop: 'పంట వెతకండి...',
    findPrices: 'ధరలు కనుగొనండి',
    featuresTitle: 'ఆధునిక రైతుల కోసం శక్తివంతమైన లక్షణాలు',
    aiPowered: 'AI-శక్తితో విశ్లేషణ',
    aiPoweredDesc: 'ఖచ్చితమైన వ్యాధి గుర్తింపు మరియు ధర అంచనా కోసం అధునాతన యంత్ర అభ్యాస అల్గరిథమ్‌లు',
    realTimeData: 'నిజ-సమయ మార్కెట్ డేటా',
    realTimeDataDesc: 'దేశవ్యాప్తంగా అనేక మార్కెట్లనుండి తాజా పంట ధరలకు ప్రాప్యత',
    multiLanguage: 'బహు-భాషా మద్దతు',
    multiLanguageDesc: 'మెరుగైన అందుబాటు కోసం తెలుగు, హిందీ మరియు ఇంగ్లీషులలో అందుబాటులో ఉంది',
    easyToUse: 'వాడుకకు సులభం',
    easyToUseDesc: 'అన్ని సాంకేతిక నేపథ్యాల రైతుల కోసం రూపకల్పన చేసిన సరళ ఇంటర్‌ఫేస్',
    getStarted: 'ఈరోజే ప్రారంభించండి',
    getStartedDesc: 'మెరుగైన నిర్ణయాలు తీసుకోవడానికి అగ్రిప్రైస్‌ను ఇప్పటికే ఉపయోగిస్తున్న వేలాది రైతులతో చేరండి',
    footer: '© 2025 అగ్రిప్రైస్. సాంకేతికతతో రైతులను శక్తివంతంగా చేయడం।',
    selectImage: 'ఒక చిత్రాన్ని ఎంచుకోండి',
    analyzing: 'మీ మొక్కను విశ్లేషిస్తున్నాము...',
    diseaseDetected: 'వ్యాధి గుర్తించబడింది',
    healthyPlant: 'మీ మొక్క ఆరోగ్యంగా కనిపిస్తోంది!',
    confidence: 'విశ్వాసం',
    treatment: 'సిఫారసు చేసిన చికిత్స',
    searchingPrices: 'ధరల కోసం వెతుకుతున్నాము...',
    currentPrice: 'ప్రస్తుత మార్కెట్ ధర',
    pricePerKg: '₹{price}/కిలో',
    marketTrend: 'మార్కెట్ ట్రెండ్',
    lastUpdated: 'చివరిసారి నవీకరించబడింది: {time}',
    selectLanguage: 'భాష ఎంచుకోండి'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
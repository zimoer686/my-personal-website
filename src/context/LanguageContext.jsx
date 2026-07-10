import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const titles = {
  en: 'MO / zimoer — Mechanical Engineer x AI',
  zh: 'MO / 李志茂 — 机械工程师 x AI',
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh';
    document.title = titles[lang];
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

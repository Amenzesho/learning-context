import  { createContext } from 'react';

const LanguageContext = createContext('dutch');

export const LanguageProvider = LanguageContext.Provider

export default LanguageContext;
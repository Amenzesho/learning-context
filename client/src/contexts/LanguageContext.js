import  { createContext } from 'react';

const LanguageContext = createContext('english');

export const LanguageProvider = LanguageContext.Provider

export default LanguageContext;
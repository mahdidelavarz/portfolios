import React, { createContext, useContext, useState } from "react";

const lngContext = createContext();


function TranslationContext({ children }) {
  const [lng, setLng] = useState(true);
  return (
    <lngContext.Provider value={{lng, setLng }}>
      {children}
    </lngContext.Provider>
  );
}

export default TranslationContext;

export function useTranslate() {
  const translate = useContext(lngContext);
  return translate;
}

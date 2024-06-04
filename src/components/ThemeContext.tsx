import React, { createContext, ReactNode, useContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  darkMode: boolean;
  toggleButton: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Check Contextt");
  }
  return context;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleButton = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, useDarkMode };

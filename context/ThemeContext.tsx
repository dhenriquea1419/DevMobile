import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  sound: boolean;
  setSound: (value: boolean) => void;
  vibration: boolean;
  setVibration: (value: boolean) => void;
  autoSave: boolean;
  setAutoSave: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        notifications,
        setNotifications,
        sound,
        setSound,
        vibration,
        setVibration,
        autoSave,
        setAutoSave,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

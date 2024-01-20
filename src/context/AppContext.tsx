import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa các loại dữ liệu bạn muốn lưu trữ trong AppProvider
interface AppContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  // Thêm các trường dữ liệu khác nếu cần
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  // Thêm các trường dữ liệu khác nếu cần

  const appContextValue: AppContextType = {
    isLoggedIn,
    login,
    logout,
    // Thêm giá trị của các trường dữ liệu khác nếu cần
  };

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

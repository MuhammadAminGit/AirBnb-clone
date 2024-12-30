import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on initial load
  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const login = (token) => {
    sessionStorage.setItem('jwtToken', token);
    setIsLoggedIn(true); // Update state
  };

  const logout = () => {
    sessionStorage.removeItem('jwtToken');
    window.location.reload(); // Reload the page
    setIsLoggedIn(false); // Update state
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

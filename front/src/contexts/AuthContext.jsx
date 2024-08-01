// contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLogged(true);
      setUserFirstName(user.firstName);
      setUserLastName(user.lastName);
    }
  }, []);

  const login = (firstName, lastName) => {
    setIsLogged(true);
    setUserFirstName(firstName);
    setUserLastName(lastName);
    localStorage.setItem('user', JSON.stringify({ firstName, lastName }));
  };

  const logout = () => {
    setIsLogged(false);
    setUserFirstName('');
    setUserLastName('');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isLogged, userFirstName, userLastName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

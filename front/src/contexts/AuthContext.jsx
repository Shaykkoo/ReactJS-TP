import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogged(true);
      setUserFirstName(user.firstName);
      setUserLastName(user.lastName);
      setUserId(user.id);
    }
  }, []);

  const login = (firstName, lastName, id) => {
    setIsLogged(true);
    setUserFirstName(firstName);
    setUserLastName(lastName);
    setUserId(id);

    // Stockage dans le localStorage
    localStorage.setItem("user", JSON.stringify({ firstName, lastName, id }));
  };

  const logout = () => {
    setIsLogged(false);
    setUserFirstName("");
    setUserLastName("");
    setUserId(null);

    // Nettoyer le localStorage
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, userFirstName, userLastName, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

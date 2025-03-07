import React, { createContext, useState, useEffect } from "react";
import keycloak from "./keycloak"; // ✅ Import the SINGLE Keycloak instance

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    if (!keycloak.authenticated) { // ✅ Prevent multiple initializations
      keycloak
        .init({ onLoad: "login-required", checkLoginIframe: false })
        .then((authenticated) => {
          setIsAuthenticated(authenticated);
          if (authenticated) {
            setToken(keycloak.token);
            setUser(keycloak.tokenParsed);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Keycloak initialization error:", err);
          setLoading(false);
        });
    }
  }, []); // ✅ Runs only once

  if (loading) return <div>Loading...</div>; // ✅ Prevents blank screen issue

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, keycloak }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

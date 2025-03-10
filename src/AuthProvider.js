import React, { createContext, useState, useEffect, useRef } from "react";
import keycloak from "./keycloak"; // ✅ Import Keycloak instance
import styled from "styled-components";

export const AuthContext = createContext();

const LoadingContainer = styled.div`
  background: linear-gradient(to bottom right, #c026d3 0%, #4c1d95 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LoadingWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem 4rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoadingText = styled.p`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #fde047;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      keycloak
        .init({ onLoad: "check-sso", checkLoginIframe: false })
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
  }, []);

  const login = () => {
    if (keycloak) {
      keycloak.login({
        idpHint: "google", // ✅ Forces Google login, skipping Keycloak login page
        redirectUri: window.location.origin, // ✅ Redirects back after login
      });
    } else {
      console.error("Keycloak instance is undefined.");
    }
  };
  

  const logout = () => {
    if (keycloak) {
      keycloak.logout(); // ✅ Ensure keycloak is available
    } else {
      console.error("Keycloak instance is undefined.");
    }
  };

  

  // if (loading) return <div>Loading...</div>;
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingWrapper>
          <Spinner />
          <LoadingText>Loading...</LoadingText>
        </LoadingWrapper>
      </LoadingContainer>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

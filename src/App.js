import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { createGlobalStyle } from 'styled-components';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

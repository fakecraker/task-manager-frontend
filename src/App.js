import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

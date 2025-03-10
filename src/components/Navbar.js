import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media (max-width: 576px) {
    padding: 0.75rem 1rem;
  }
`;

const LogoImage = styled.img`
  height: 50px; // Adjust height as needed
  width: auto;
  @media (max-width: 576px) {
    height: 35px;
  }
`;


const LogoutButton = styled.button`
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #b91c1c;
  }

   @media (max-width: 576px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const Navbar = () => {
  
  const { isAuthenticated, logout } = useContext(AuthContext); 

  const handleLogout = () => {
    if (logout) {
      logout();
    } else {
      console.error("Logout function is not available.");
    }
  };

  return (
    <NavbarContainer>
      <LogoImage src="/app name.png" alt="Taskmate Logo" />
      <LogoutButton onClick={handleLogout}>
        <span>Log-out</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;
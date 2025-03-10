import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import styled from "styled-components";


const LoginContainer = styled.div`
  background: linear-gradient(to bottom right, #c026d3 0%, #4c1d95 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 3;
    display: grid;
    place-items: center;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

const LoginCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-left: 5rem;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 576px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    width: 100%;
    max-width: none;
    margin: 0 1rem;
  }
`;

const LogoImage = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: 60px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
    top: 1rem;
    left: 1rem;
  }
`;


const WelcomeText = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
     @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const GoogleButton = styled.button`
  background: #4285f4;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  margin: 1.5rem auto;
  width: 100%;
  max-width: 300px;

  &:hover {
    background: #357abd;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    max-width: 250px;
  }
    @media (max-width: 576px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const TermsText = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 2rem;
  
  a {
    color: #4285f4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 0.7rem;
    margin-top: 1rem;
  }
`;

const IllustrationWrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 45%;
  max-width: 600px;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(126, 34, 206, 0.3));
  border-radius: 30px;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 1200px) {
    width: 50%;
    opacity: 0.4;
    right: -5%;
  }

  @media (max-width: 576px) {
    display: none; // Hides the illustration on mobile
  }
`;

const IllustrationContainer = styled.div`
  position: relative;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
  }
`;

const YellowCircle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: #fde047;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 0;
  
  &.top {
    top: -50px;
    left: -50px;
  }
  
  &.bottom {
    bottom: -50px;
    right: -50px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    
    &.top {
      top: -30px;
      left: -30px;
    }
    
    &.bottom {
      bottom: -30px;
      right: -30px;
    }
  }
`;

const LoadingContainer = styled.div`
  background: linear-gradient(to bottom right, #c026d3 0%, #4c1d95 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.p`
  color: white;
  font-size: 1.8rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem 4rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.5rem 3rem;
  }
`;


const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);


  if (isAuthenticated) {
    return (
      <LoadingContainer>
        <LoadingText>Redirecting...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <LoginContainer>
      <LogoImage src="/app name.png" alt="Taskmate Logo" />

      <LoginCard>
        <WelcomeText>Welcome to Taskmate</WelcomeText>
        <p>Log-in With</p>
        <GoogleButton onClick={login}>
          <img
            src="/google-icon.png"
            alt="Google"
            style={{ width: "20px", height: "20px" }}
          />
          Google
        </GoogleButton>
        <TermsText>
          By registration you agree to{" "}
          <a href="/terms">Terms of use</a> and{" "}
          <a href="/privacy">Privacy policy</a>
        </TermsText>
      </LoginCard>

      <IllustrationContainer>
        <IllustrationWrapper>
          <YellowCircle className="top" />
          <IllustrationContainer>
            <img
              src="/task-illustration.png.png"
              alt="Task Management"
            />
          </IllustrationContainer>
          <YellowCircle className="bottom" />
        </IllustrationWrapper>
      </IllustrationContainer>
    </LoginContainer>
  );
};

export default Login;
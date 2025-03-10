import styled, { keyframes } from 'styled-components';

const rollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

const AnimatedText = styled.div`
  white-space: nowrap;
  animation: ${rollText} 15s linear infinite;
  padding: 0 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <AnimatedText>
        ©{new Date().getFullYear()} Task Mate. All rights Reserved
      </AnimatedText>
    </FooterContainer>
  );
};

export default Footer;
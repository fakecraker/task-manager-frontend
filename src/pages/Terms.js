import styled from "styled-components";

const TermsContainer = styled.div`
  background: linear-gradient(to bottom right, #c026d3 0%, #4c1d95 100%);
  min-height: 100vh;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  background: white;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #4c1d95;
  margin-bottom: 1rem;
`;

const Terms = () => {
  return (
    <TermsContainer>
      <ContentWrapper>
        <Title>Terms of Use</Title>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <p>
            By accessing and using TaskMate, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our service.
          </p>
        </Section>

        <Section>
          <SectionTitle>2. Google Account Integration</SectionTitle>
          <p>
            TaskMate uses Google Sign-In for authentication. By using our service, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete Google account information</li>
            <li>Maintain the security of your Google account</li>
            <li>Accept Google's Terms of Service and Privacy Policy</li>
            <li>Allow TaskMate to access basic profile information</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>3. User Responsibilities</SectionTitle>
          <p>
            As a user of TaskMate, you are responsible for:
          </p>
          <ul>
            <li>All activities that occur under your account</li>
            <li>Maintaining the confidentiality of your account</li>
            <li>Ensuring your use complies with applicable laws</li>
            <li>The content you create and manage within the application</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>4. Service Usage</SectionTitle>
          <p>
            TaskMate provides task management services. Users agree not to:
          </p>
          <ul>
            <li>Use the service for any illegal purposes</li>
            <li>Attempt to gain unauthorized access to the service</li>
            <li>Interfere with or disrupt the service</li>
            <li>Share account credentials with third parties</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>5. Data Privacy</SectionTitle>
          <p>
            We respect your privacy and protect your personal information. Our handling of your data is governed by our Privacy Policy and includes:
          </p>
          <ul>
            <li>Collection of basic profile information from Google</li>
            <li>Storage of task-related data</li>
            <li>Protection of user information</li>
            <li>User data deletion upon account termination</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>6. Modifications to Service</SectionTitle>
          <p>
            We reserve the right to modify or discontinue the service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the service.
          </p>
        </Section>

        <Section>
          <SectionTitle>7. Termination</SectionTitle>
          <p>
            We may terminate or suspend your access to TaskMate immediately, without prior notice or liability, for any reason, including breach of these Terms.
          </p>
        </Section>

        <Section>
          <SectionTitle>8. Contact Information</SectionTitle>
          <p>
            If you have any questions about these Terms, please contact us at support@taskmate.com
          </p>
        </Section>

        <Section>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </Section>
      </ContentWrapper>
    </TermsContainer>
  );
};

export default Terms;

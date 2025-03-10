import styled from "styled-components";

const PolicyContainer = styled.div`
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

const Privacy = () => {
  return (
    <PolicyContainer>
      <ContentWrapper>
        <Title>Privacy Policy</Title>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <p>When you use TaskMate, we collect:</p>
          <ul>
            <li>Basic profile information from your Google account (name, email)</li>
            <li>Task-related data you create and manage</li>
            <li>Usage information and activity logs</li>
            <li>Device and browser information</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain TaskMate services</li>
            <li>Authenticate your identity via Google Sign-In</li>
            <li>Save and manage your tasks and preferences</li>
            <li>Improve and optimize our service</li>
            <li>Communicate with you about service updates</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>3. Data Storage and Security</SectionTitle>
          <p>
            We implement appropriate security measures to protect your information:
          </p>
          <ul>
            <li>Secure data encryption in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Limited access to personal information by authorized personnel</li>
            <li>Secure Google OAuth 2.0 authentication protocol</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>4. Google Account Integration</SectionTitle>
          <p>
            Our Google Sign-In integration:
          </p>
          <ul>
            <li>Uses OAuth 2.0 for secure authentication</li>
            <li>Requests minimal profile information</li>
            <li>Does not post to your Google account</li>
            <li>Follows Google's data privacy requirements</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>5. Data Sharing</SectionTitle>
          <p>
            We do not sell or share your personal information with third parties except:
          </p>
          <ul>
            <li>When required by law</li>
            <li>To protect our rights and safety</li>
            <li>With your explicit consent</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>6. Your Rights</SectionTitle>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Request data correction or deletion</li>
            <li>Export your task data</li>
            <li>Opt-out of non-essential communications</li>
            <li>Delete your account and associated data</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>7. Cookies and Tracking</SectionTitle>
          <p>
            We use essential cookies and similar technologies to:
          </p>
          <ul>
            <li>Maintain your session</li>
            <li>Remember your preferences</li>
            <li>Enhance security</li>
            <li>Improve service performance</li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>8. Children's Privacy</SectionTitle>
          <p>
            TaskMate is not intended for children under 13. We do not knowingly collect information from children under 13.
          </p>
        </Section>

        <Section>
          <SectionTitle>9. Changes to Privacy Policy</SectionTitle>
          <p>
            We may update this policy periodically. We will notify you of significant changes via email or service notification.
          </p>
        </Section>

        <Section>
          <SectionTitle>10. Contact Us</SectionTitle>
          <p>
            For privacy-related questions, contact us at privacy@taskmate.com
          </p>
        </Section>

        <Section>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </Section>
      </ContentWrapper>
    </PolicyContainer>
  );
};

export default Privacy;

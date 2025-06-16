import EmailVerificationClient from '@/app/components/auth/EmailVerificationClient';
import Container from '@/app/components/layout/Container';
import React from 'react';

const EmailVerificationPage = () => {
  return (
    <Container>
      <EmailVerificationClient/>
    </Container>
  );
};

export default EmailVerificationPage;
import React from 'react';
import { Centered, Colors, Container, Button, Heading } from '../../theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorWrap = styled.div`
  background-color: ${Colors.lightPurple};
  ${Centered};
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

function ErrorPage() {
  const navigate = useNavigate();
  console.log('hello')
  return (
    <Container>
      <ErrorWrap>
        <Heading h1>No Cards Found!</Heading>
        <Button onClick={() => navigate('/')}>Edit Search</Button>
      </ErrorWrap>
    </Container>
  )
};

export default ErrorPage;
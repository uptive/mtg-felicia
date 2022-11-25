import React from 'react';
import image from '../../assets/loading.png';
import styled from 'styled-components';
import { Container } from '../../components/theme';

const Image = styled.img`
animation: spin 4s linear infinite;
width: 20rem;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`;

function LoadingPage() {
  return (
    <Container>
      <Image src={image} />
    </Container>
  )
};

export default LoadingPage;
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


const Error = () => {
  return (
    <Container>
      <h1>Page not found!</h1>
    </Container>
  );
};

export default Error;
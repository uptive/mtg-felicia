import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Container, Colors } from '../theme';

const FormContainer = styled.div`
  background-color: ${Colors.primary};
  height: 95%;
`;

const FormInputs = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const Input = styled.input`
  padding: .5rem 0;
  outline: none;
`;


function Form() {
  return (
    <Container>
      <FormContainer>
        <Formik
          initialValues={{}}
          onSubmit={() => console.log('do something on submit')}
        >
          <FormInputs>
            <Input name='Name' />
            <Input name='Name' />
          </FormInputs>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Form;
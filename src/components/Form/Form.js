import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Container, Colors, Button } from '../theme';
import { GetCardsAsync } from '../../services/CardService';
import { useDispatch } from 'react-redux';
import { ADD_CARDS, SET_QUERY } from '../../store/actionTypes';

const FormContainer = styled.div`
  background-color: ${Colors.lightPurple};
  padding: 0 1rem 2rem 1rem;
  min-width: 30rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FormInputs = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin: .3rem 0 0 0;
  background-color: ${Colors.lightGray};
  ${props => props.small && `
    width: 50%;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 3rem;
`;

const Row = styled.div`
  display: flex;
  gap: ${props => props.gap}rem;
  margin-bottom: 1rem;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: left;
  ${props => props.center && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Label = styled.label`
`;

const ImageDiv = styled.div`
  width: 12rem;
  height: 12rem;
  margin: .3rem 0 0 0;
  background-color: ${Colors.lightGray};
  border: ${Colors.darkGray} solid 1px;
`

const ImageButton = styled.button`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: none;
  background-color: ${Colors.darkPurple};
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.blue};
  } 
`;

function SearchForm() {
  const dispatch = useDispatch();
  const [match, setMatch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    GetCardsAsync(values)
      .then((response) => {
        setMatch(response.data);
        dispatch({
          type: SET_QUERY,
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
      })
    console.log(match);
  };

  return (
    <Container>
      <FormContainer>
        <h1>Search</h1>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, actions) => {
            handleSubmit(values.query);
          }}
        >
          {props => (
            <div>
              <Row>
                <Col size={1}>
                  <Label htmlFor='name'>Name</Label>
                  <FormInputs
                    type='text'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='name'
                  />
                </Col>
              </Row>
              <Row gap={2}>
                <Col size={2}>
                  <Label htmlFor='type'>Type</Label>
                  <FormInputs
                    type='select'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='type'
                  />
                </Col>
                <Col size={2}>
                  <Label htmlFor='cost'>Cost</Label>
                  <FormInputs
                    type='text'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='cost'
                  />
                </Col>
              </Row>
              <Row>
                <Col size={2}>
                  <Label>Image</Label>
                  <ImageDiv></ImageDiv>
                </Col>
                <Col size={2} center>
                  <ImageButton>New image</ImageButton>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <Label htmlFor='desc'>Description</Label>
                  <FormInputs
                    type='text'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='desc'
                  />
                </Col>
              </Row>
              <Row gap={2}>
                <Col size={2}>
                  <Label htmlFor='power'>Power</Label>
                  <FormInputs
                    type='select'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='power'
                  />
                </Col>
                <Col size={2}>
                  <Label htmlFor='toughness'>Toughness</Label>
                  <FormInputs
                    type='text'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.query}
                    name='toughness'
                  />
                </Col>
              </Row>
              <ButtonContainer>
                <Button type='submit' inverted>Clear</Button>
                <Button type='submit' primary onSubmit={props.handleSubmit}>Search</Button>
              </ButtonContainer>
              {props.errors.name && <div>{props.errors.name}</div>}
            </div>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default SearchForm;
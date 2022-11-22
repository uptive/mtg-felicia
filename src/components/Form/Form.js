import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Container, Colors, Button, Heading } from '../theme';
import { GetCardsAsync } from '../../services/CardService';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARDS, SET_QUERY } from '../../store/actionTypes';

const FormContainer = styled.div`
  background-color: ${Colors.lightPurple};
  padding: 1.5rem;
  padding-right: 2rem;
  min-width: 30rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FormInputs = styled.input`
  padding: .5rem 0;
  padding-left: .5rem;
  margin-top: .3rem;
  background-color: ${Colors.lightGray};
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const FormSelect = styled.select`
  padding: .5rem;
  margin-top: .3rem;
  background-color: ${Colors.lightGray};
  width: 100%;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
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
  margin-top: ${props => props.margin}rem;
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
  color: ${Colors.white};
  margin-bottom: .5rem; 
`;

const ImageDiv = styled.div`
  width: 12rem;
  height: 12rem;
  margin: .3rem 0 0 0;
  background-color: ${Colors.lightGray};
  border: ${Colors.darkGray} solid 1px;
`;

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
  const query = useSelector(state => state.cards.querys);
  //Jag behöver göra en lokalt state som jag sedan skickar tillbaka till redux när jag klickar på nästa - på så vis uppdateras hela statet och jag behöver inte göra en för en
  //Ändra value i alla fält till redux state
  //Lägg till clear query och påkalla den actionen
  const initQuerys = {
    name: '',
    type: '',
    cost: undefined,
    image: '',
    desc: '',
    power: undefined,
    toughness: undefined,
  };
  const [newQuery, setNewQuery] = useState(initQuerys);
  const [match, setMatch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const typeOptions = [
    { id: 'creature', value: 'Creature' },
    { id: 'land', value: 'Land' },
    { id: 'sorcery', value: 'Sorcery' },
    { id: 'enchantment', value: 'Enchantment' },
    { id: 'instant', value: 'Instant' }
  ];
  const [chosenTypeOption, setChosenTypeOption] = useState();
  const [card, setCard] = useState();

  const handleSearch = () => {
    dispatch({
      type: SET_QUERY,
      payload: newQuery,
    })
  };

  const handleSelectChange = (event) => {
    setChosenTypeOption(event.target.value);
    newQuery.type = event.target.value;
    setNewQuery({ ...newQuery });
  };

  console.log(query);

  return (
    <Container>
      <FormContainer>
        <Heading h1>Search</Heading>
        <Formik
          initialValues={{ query: '' }}

        >
          {props => (
            <div>
              <Row margin={2}>
                <Col size={1}>
                  <Label htmlFor='name'>Name</Label>
                  <FormInputs
                    type='text'
                    onChange={(event) => {
                      newQuery.name = event.target.value;
                      setNewQuery({ ...newQuery });
                    }}
                    onBlur={props.handleBlur}
                    value={newQuery.name}
                    name='name'
                  />
                </Col>
              </Row>
              <Row gap={2}>
                <Col size={2}>
                  <Label htmlFor='type'>Type</Label>
                  <FormSelect placeholder='Choose type' value={newQuery.type} onChange={handleSelectChange}>
                    {typeOptions.map((option) => (
                      <option key={option.id} onClick={() => setChosenTypeOption(option.value)}>{option.value}</option>
                    ))}
                  </FormSelect>
                </Col>
                <Col size={2}>
                  <Label htmlFor='cost'>Cost</Label>
                  <FormInputs
                    type='text'
                    onChange={(event) => {
                      newQuery.cost = event.target.value;
                      setNewQuery({ ...newQuery });
                    }}
                    onBlur={props.handleBlur}
                    value={newQuery.cost}
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
                    onChange={(event) => {
                      newQuery.desc = event.target.value;
                      setNewQuery({ ...newQuery });
                    }}
                    onBlur={props.handleBlur}
                    value={newQuery.desc}
                    name='desc'
                  />
                </Col>
              </Row>
              {chosenTypeOption === 'Creature' && (
                <Row gap={2}>
                  <Col size={2}>
                    <Label htmlFor='power'>Power</Label>
                    <FormInputs
                      type='number'
                      onChange={(event) => {
                        newQuery.power = event.target.value;
                        setNewQuery({ ...newQuery });
                      }}
                      onBlur={props.handleBlur}
                      value={newQuery.power}
                      name='power'
                    />
                  </Col>
                  <Col size={2}>
                    <Label htmlFor='toughness'>Toughness</Label>
                    <FormInputs
                      type='number'
                      onChange={(event) => {
                        newQuery.toughness = event.target.value;
                        setNewQuery({ ...newQuery });
                      }}
                      onBlur={props.handleBlur}
                      value={newQuery.toughness}
                      name='toughness'
                    />
                  </Col>
                </Row>
              )}
              <ButtonContainer>
                <Button type='submit' inverted>Clear</Button>
                <Button primary onClick={() => handleSearch()}>Search</Button>
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
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Container, Button, Heading } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuery } from '../../../store/actionTypes';
import { GetRandomCard } from '../../../services/CardService';
import { useNavigate } from 'react-router-dom';
import { setQuery, setLoading } from '../../../store/actionTypes/index';
import { Col, Row, FormContainer, Label, ImageDiv, Image, ImageButton, ButtonContainer } from './styles';
import './form.css';
import LoadingPage from '../Loading/Loading';

function SearchForm() {
  const query = useSelector(state => state.form.querys);
  const isLoading = useSelector(state => state.form.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const typeOptions = [
    { id: 'creature', value: 'Creature' },
    { id: 'land', value: 'Land' },
    { id: 'sorcery', value: 'Sorcery' },
    { id: 'enchantment', value: 'Enchantment' },
    { id: 'instant', value: 'Instant' }
  ];
  const [chosenType, setChosenType] = useState();
  const [randomImage, setRandomImage] = useState();

  const getRandomImage = () => {
    GetRandomCard()
      .then(data => {
        const image = data.image_uris.art_crop;
        setRandomImage(image);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Container>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <FormContainer>
          <Heading h1>Search</Heading>
          <Formik
            initialValues={{ ...query }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(setLoading(true))
              setTimeout(() => {
                dispatch(setQuery(values));
                dispatch(setLoading(false));
                setSubmitting(false);
                navigate('/result');
              }, 4000);

            }}
            onReset={(values, actions) => {
              setTimeout(() => {
                dispatch(clearQuery(values))
                  .then(() => {
                    actions.resetForm({
                      values: {
                        name: '',
                        type: '',
                        cost: undefined,
                        image: '',
                        desc: '',
                        power: undefined,
                        toughness: undefined,
                      },
                    })
                  })

              }, 1000);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Row margin={2}>
                  <Col size={1}>
                    <Label htmlFor='name'>Name</Label>
                    <Field type="text" name="name" placeholder='Name' component='input' />
                    <ErrorMessage name="name" component="div" />
                  </Col>
                </Row>
                <Row gap={2}>
                  <Col size={2}>
                    <Label htmlFor='type'>Type</Label>
                    <Field name='type' as='select'>
                      {typeOptions.map((option) => (
                        <option key={option.id} value={option.value} onClick={() => setChosenType(option.value)}>{option.value}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="type" component="div" />
                  </Col>
                  <Col size={2}>
                    <Label htmlFor='cost'>Cost</Label>
                    <Field type="text" name="cost" component='input' />
                    <ErrorMessage name="cost" component="div" />
                  </Col>
                </Row>
                <Row>
                  <Col size={2}>
                    <Label>Image</Label>
                    <Field component={ImageDiv} name='image' value={randomImage}>
                      <Image src={randomImage} />
                    </Field>
                  </Col>
                  <Col size={2} center>
                    <ImageButton type='button' onClick={async () => {
                      getRandomImage();
                      // setFieldValue(randomImage)
                    }}> New Image</ImageButton>
                  </Col>
                </Row>
                <Row>
                  <Col size={1}>
                    <Label htmlFor='desc'>Description</Label>
                    <Field type="text" name="desc" component='input' />
                  </Col>
                </Row>

                <Row gap={2}>
                  <Col size={2}>
                    <Label htmlFor='power'>Power</Label>
                    <Field type="text" name="power" component='input' />
                  </Col>
                  <Col size={2}>
                    <Label htmlFor='toughness'>Toughness</Label>
                    <Field type="text" name="tougness" component='input' />
                  </Col>
                </Row>

                <ButtonContainer>
                  <Button inverted type='reset'>Clear</Button>
                  <Button primary type='submit' disabled={isSubmitting}>Search</Button>
                </ButtonContainer>
              </Form>
            )}
          </Formik>
        </FormContainer>
      )}
    </Container>
  )
};

export default SearchForm;
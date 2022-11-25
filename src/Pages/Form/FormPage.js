import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, useFormikContext } from 'formik';
import { Container, Button, Heading } from '../../components/theme';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuery } from '../../store/actionTypes';
import { GetRandomCard } from '../../services/CardService';
import { useNavigate } from 'react-router-dom';
import { setQuery, setLoading } from '../../store/actionTypes/index';
import { Col, Row, FormContainer, Label, ImageDiv, Image, ImageButton, ButtonContainer, ErrorMsg } from './styles';
import './form.css';
import LoadingPage from '../Loading/Loading';
import _ from 'lodash';

const ImageChild = () => {
  const [randomImage, setRandomImage] = useState();
  const formikProps = useFormikContext();

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

  useEffect(() => {
    formikProps.setFieldValue('image', randomImage);
  }, [randomImage])

  return (
    <Row>
      <Col size={2}>
        <Label>Image</Label>
        <Field component={ImageDiv} name='image' >
          {randomImage !== undefined && (
            <Image src={formikProps.values.image} />
          )}
        </Field>
      </Col>
      <Col size={2} center>
        <ImageButton type='button' onClick={() => getRandomImage()}> New Image</ImageButton>
      </Col>
    </Row>
  )
}

const ButtonsChild = () => {
  const formikProps = useFormikContext();
  const [reset, setReset] = useState();
  const dispatch = useDispatch();

  const onResetForm = () => {
    dispatch(clearQuery());
    setReset(true);
  };

  useEffect(() => {
    if (reset) {
      formikProps.resetForm({
        values: {
          name: '',
          type: '',
          cost: '',
          image: '',
          desc: '',
          power: '',
          toughness: '',
        }
      })
    }
  }, [reset])

  return (
    <ButtonContainer>
      <Button inverted type='reset' onClick={() => onResetForm()}>Clear</Button>
      <Button disabled={!formikProps.values} primary type='submit'>Search</Button>
    </ButtonContainer>
  )
}

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

  return (
    <Container>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <FormContainer>
          <Heading h1>Search</Heading>
          <Formik
            initialValues={{ ...query }}
            validate={(values) => {
              let errors = {};
              if (!values.type) {
                errors.type = 'You have to choose a type!'
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(setLoading(true))
              setTimeout(() => {
                dispatch(setQuery(values));
                dispatch(setLoading(false));
                setSubmitting(false);
                navigate('/result');
              }, 4000);
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <Row margin={2}>
                  <Col size={1}>
                    <Label htmlFor='name'>Name</Label>
                    <Field type="text" name="name" component='input' />
                  </Col>
                </Row>
                <Row gap={2}>
                  <Col size={2}>
                    <Label htmlFor='type'>Type</Label>
                    <Field name='type' as='select' className={values.type === 'Land' || values.type === '' ? 'small' : ''} placeholder='Choose type'>
                      <option disabled defaultValue></option>
                      {typeOptions.map((option) => (
                        <option key={option.id} value={option.value}>{option.value}</option>
                      ))}
                    </Field>
                    {errors.type && touched.type ? <ErrorMsg>{errors.type}</ErrorMsg> : null}
                  </Col>
                  {values.type !== 'Land' && values.type !== '' && (
                    <Col size={2}>
                      <Label htmlFor='cost'>Cost</Label>
                      <Field type="text" name="cost" component='input' />
                    </Col>
                  )}
                </Row>
                <ImageChild />
                <Row>
                  <Col size={1}>
                    <Label htmlFor='desc'>Description</Label>
                    <Field type="text" name="desc" component='input' />
                  </Col>
                </Row>
                {values.type === 'Creature' && (
                  <Row gap={2}>
                    <Col size={2}>
                      <Label htmlFor='power'>Power</Label>
                      <Field type="text" name="power" component='input' />
                    </Col>
                    <Col size={2}>
                      <Label htmlFor='toughness'>Toughness</Label>
                      <Field type="text" name="toughness" component='input' />
                    </Col>
                  </Row>
                )}
                <ButtonsChild />
              </Form>
            )}
          </Formik>
        </FormContainer>
      )}
    </Container>
  )
};

export default SearchForm;
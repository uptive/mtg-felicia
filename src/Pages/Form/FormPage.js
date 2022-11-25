import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
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
import * as Yup from 'yup';

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

  const validationSchema = Yup.object({
    type: Yup.string().required('Type is required')
  })

  return (
    <Container>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <FormContainer>
          <Heading h1>Search</Heading>
          <Formik
            initialValues={{ ...query }}
            validationSchema={validationSchema}
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
                actions.resetForm({
                  values: {
                    name: '',
                    type: '',
                    cost: '',
                    image: '',
                    desc: '',
                    power: '',
                    toughness: '',
                  },
                })
              }, 1000);
            }}
          >
            {({ values }) => (
              <Form>
                <Row margin={2}>
                  <Col size={1}>
                    <Label htmlFor='name'>Name</Label>
                    <Field type="text" name="name" component='input' />
                    <ErrorMessage name="name" component="div" />
                  </Col>
                </Row>
                <Row gap={2}>
                  <Col size={2}>
                    <Label htmlFor='type'>Type</Label>
                    <Field name='type' as='select' className={values.type === 'Land' ? 'small' : ''} placeholder='Choose type'>
                      <option disabled defaultValue></option>
                      {typeOptions.map((option) => (
                        <option key={option.id} value={option.value}>{option.value}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="type" component={ErrorMsg} />
                  </Col>
                  {values.type !== 'Land' && (
                    <Col size={2}>
                      <Label htmlFor='cost'>Cost</Label>
                      <Field type="text" name="cost" component='input' />
                      <ErrorMessage name="cost" component="div" />
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
                      <Field type="text" name="tougness" component='input' />
                    </Col>
                  </Row>
                )}
                <ButtonContainer>
                  <Button inverted type='reset'>Clear</Button>
                  <Button primary type='submit' >Search</Button>
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
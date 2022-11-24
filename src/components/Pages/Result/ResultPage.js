import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Container, Button, LoadingSpinner, Heading } from '../../theme';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import { ResultContainer, Label, CardWrap, Row, Col } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Percentage from './Precentage';
import { addCards } from '../../../store/actionTypes';
import { GetCardsMatch } from '../../../services/CardService';
import ErrorPage from '../Error/Error';

function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useSelector(state => state.form.querys);
  const colors = [];
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    GetCardsMatch(query)
      .then((response) => {
        if (response !== undefined) {
          const array = response.data;
          setCards(array);
        }
      })
      .catch((error) => {
        console.log('error', error);
        setError(error);
      });

  }, []);

  // const checkColors = cards.data.forEach(element => {
  //   colors.push(element.color_identity);
  //   // const result = colors.includes(color => color === 'W');
  //   // return result;
  // });

  // const newArray = colors.join();
  // const red = newArray.includes(color => color === 'W');

  return (
    <>
      {error ?
        (<ErrorPage />)
        : (
          <Container>
            {cards?.length > 0 && cards !== undefined && (
              <ResultContainer>
                <Heading h1>Result</Heading>
                <Row gap={2} margin={3}>
                  <Col size={2} center>
                    <Label>Generated Card</Label>
                    <CardWrap>
                      <Card card={query} />
                    </CardWrap>
                  </Col>
                  <Col size={2} center>
                    <Label>Similar Card</Label>
                    <ImageCarousel cards={cards} />
                  </Col>
                </Row>
                {query?.type === 'Creature' && (
                  <Percentage />
                )}
                <Row margin={8}>
                  <Button inverted onClick={() => navigate('/')}>Edit search</Button>
                </Row>
              </ResultContainer>
            )}
          </Container>
        )}
    </>
  )
}

export default Result;
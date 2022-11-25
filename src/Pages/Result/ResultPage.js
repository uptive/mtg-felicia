import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { Container, Button, Heading } from '../../components/theme';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../../components/Carousel/ImageCarousel';
import { ResultContainer, Label, CardWrap, Row, Col } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Percentage from '../../components/Percentage/Precentage';
import { GetCardsMatch } from '../../services/CardService';
import ErrorPage from '../Error/Error';
import { addCards } from '../../store/actionTypes';

function Result() {
  const navigate = useNavigate();
  const query = useSelector(state => state.form.querys);
  const [cards, setCards] = useState();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    GetCardsMatch(query)
      .then((response) => {
        if (response !== undefined) {
          const array = response.data;
          setCards(array);
        }
        if (response.status === 400) {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error)
      })
  }, []);

  useEffect(() => {
    if (cards && cards.length > 0) {
      dispatch(addCards(cards));
    }
  }, [cards]);

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
                  <Percentage cards={cards} />
                )}
                <Row margin={query?.type !== 'Creature' ? 8 : 3}>
                  <Button type='button' inverted onClick={() => navigate('/')}>Edit search</Button>
                </Row>
              </ResultContainer>
            )}
          </Container>
        )}
    </>
  )
}

export default Result;
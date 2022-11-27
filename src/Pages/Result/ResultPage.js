import React from 'react';
import Card from '../../components/Card/Card';
import { Container, Button, Heading } from '../../components/theme';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../../components/Carousel/ImageCarousel';
import { ResultContainer, Label, CardWrap, Row, Col } from './styles';
import { useSelector } from 'react-redux';
import Percentage from '../../components/Percentage/Precentage';
import ErrorPage from '../Error/ErrorPage';

function Result() {
  const navigate = useNavigate();
  const query = useSelector(state => state.form.querys);
  const cards = useSelector(state => state.form.cards);
  const hasError = useSelector(state => state.form.error);

  return (
    <>
      {hasError === true ?
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
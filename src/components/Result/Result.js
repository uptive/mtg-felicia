import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Container, Colors, Button, LoadingSpinner, H1, Heading } from '../theme';
import { useNavigate } from 'react-router-dom';
import { GetRandomCard } from '../../services/CardService';

const ResultContainer = styled.div`
  background-color: ${Colors.lightPurple};
  padding: 1.5rem;
  min-width: 50rem;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CardWrap = styled.div`
  width: 270px;
`;

const Label = styled.span`
  color: ${Colors.white};
  margin-bottom: .5rem;
`;

const ImageContainer = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.img`
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: ${props => props.gap}rem;
  margin-top: ${props => props.margin}rem;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: left;
  ${props => props.center && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

function Result() {
  const navigate = useNavigate();
  const [randomCard, setRandomCard] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (randomCard === undefined) {
      setIsLoading(true);
      GetRandomCard()
        .then(data => {
          setRandomCard(data);
          setIsLoading(false);
        })
    }
  }, []);

  return (
    <Container>
      <ResultContainer>
        <Heading h1>Result</Heading>
        <Row gap={2} margin={3}>
          <Col size={2} center>
            <Label>Generated Card</Label>
            <CardWrap>
              <Card matchedCard={'Here goes the api result of matches'} />
            </CardWrap>
          </Col>
          <Col size={2} center>
            <Label>Similar Card</Label>
            <ImageContainer>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ImageWrap
                  src={randomCard && randomCard.image_uris.png}
                  alt='random card'
                />
              )}
            </ImageContainer>
          </Col>
        </Row>
        <Row margin={8}>
          <Button inverted onClick={() => navigate('/')}>Edit search</Button>
        </Row>
      </ResultContainer>
    </Container>
  )
}

export default Result;
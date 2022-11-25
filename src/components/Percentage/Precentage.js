import React from 'react';
import { Colors, Centered } from '../theme';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${Colors.darkPurple};
  margin: 4rem 3rem 0 3rem;
  padding: 2rem;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const Circle = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: ${props => props.color};
  color: ${props => props.color === '#FFFFFF' ? '#000000' : '#FFFFFF'};
  ${Centered};
  border-radius: 50%;
`;

function Percentage({ cards }) {
  const array = [];

  cards.forEach((element) => {
    const colors = element.color_identity.toString();
    array.push(colors);
  })

  const red = array.filter((element) => element === 'R');
  const redPrecentage = Math.round((red.length / cards.length) * 100);
  const blue = array.filter((element) => element === 'U');
  const bluePrecentage = Math.round((blue.length / cards.length) * 100);
  const black = array.filter((element) => element === 'B');
  const blackPrecentage = Math.round((black.length / cards.length) * 100);
  const white = array.filter((element) => element === 'W');
  const whitePrecentage = Math.round((white.length / cards.length) * 100);
  const green = array.filter((element) => element === 'G');
  const greenPrecentage = Math.round((green.length / cards.length) * 100);

  return (
    <Container>
      <Circle color={Colors.white}>{whitePrecentage} %</Circle>
      <Circle color={Colors.blue}>{bluePrecentage} %</Circle>
      <Circle color={Colors.black}>{blackPrecentage} %</Circle>
      <Circle color={Colors.red}>{redPrecentage} %</Circle>
      <Circle color={Colors.green}>{greenPrecentage} %</Circle>
    </Container>
  )
};

export default Percentage;
import React from 'react';
import { Colors, Centered } from '../../theme';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


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
  background-color: #${props => props.color};
  color: #${props => props.color === 'FFFFFF' ? '000000' : 'FFFFFF'};
  ${Centered};
  border-radius: 50%;
`;

function Percentage() {
  const cards = useSelector(state => state.form.cards);

  // console.log(cards);
  // const colorCalculator = () => {
  //   if(cards.data.colors.includes('B')){
  //     const red = Math.round((cards.data.co / data.income) * 100)
  //   };
  // }
  return (
    <Container>
      <Circle color='FFFFFF'>50 %</Circle>
      <Circle color='429ef5'>50 %</Circle>
      <Circle color='000000'>50 %</Circle>
      <Circle color='f55442'>50 %</Circle>
      <Circle color='6dd164'>50 %</Circle>
    </Container>
  )
};

export default Percentage;
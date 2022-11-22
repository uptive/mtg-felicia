import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';

const CardWrapper = styled.div`
  background-color: ${Colors.darkPurple};
  padding: 1rem;
  border-radius: .5rem;
  height: 376px;
`;

const CardName = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.darkGray};
  padding: .5rem;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
`;

const CardImage = styled.div`
  background-color: ${Colors.lightGray};
  height: 10rem;
  widht: 100%;
  object-fit: cover;
`;

const CardType = styled.div`
  background-color: ${Colors.darkGray};
  padding: .5rem;
`;

const CardDesc = styled.div`
  background-color: ${Colors.lightGray};
  padding: .5rem;
  height: 7.5rem;
  position: relative;
`;

const CardPower = styled.div`
  background-color: ${Colors.darkGray};
  position: absolute;
  bottom: -10px;
  right: -5px;
  padding: .2rem .8rem;
  border-radius: .5rem;
`;

function Card() {
  return (
    <CardWrapper>
      <CardName>
        <span>Name</span>
        <span>Cost</span>
      </CardName>
      <CardImage>Here goes image</CardImage>
      <CardType>
        <span>Type</span>
      </CardType>
      <CardDesc>
        <span>Description</span>
        {/* make a check if card has powers or not */}
        <CardPower>
          <span>P</span>
          /
          <span>T</span>
        </CardPower>
      </CardDesc>
    </CardWrapper>
  );
}

export default Card; 
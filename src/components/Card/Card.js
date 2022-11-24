import React from 'react';
import { CardWrapper, CardName, CardImage, CardType, CardPower, CardDesc } from './styles';

function Card({ card }) {

  return (
    <CardWrapper>
      <CardName>
        <span>{card.name ? card.name : '-'}</span>
        <span>{card.cost ? card.cost : '-'}</span>
      </CardName>
      <CardImage>
        <img src={card.image ? card.image : ''} />
      </CardImage>
      <CardType>
        <span>{card.type ? card.type : '-'}</span>
      </CardType>
      <CardDesc>
        <span>{card.desc ? card.desc : '-'}</span>
        {/* make a check if card has powers or not */}
        {card.power || card.toughness && (
          <CardPower>
            <span>{card.power ? card.power : '-'}</span>
            /
            <span>{card.toughness ? card.toughness : '-'}</span>
          </CardPower>
        )}
      </CardDesc>
    </CardWrapper>
  );
}

export default Card; 
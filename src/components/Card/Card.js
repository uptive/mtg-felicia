import React from 'react';
import { CardWrapper, CardName, CardImage, CardType, CardPower, CardDesc, Image } from './styles';

function Card({ card }) {
  return (
    <CardWrapper>
      <CardName>
        <span>{card.name ? card.name : '-'}</span>
        <span>{card.cost ? card.cost : '-'}</span>
      </CardName>
      <CardImage>
        <Image src={card.image ? card.image : ''} />
      </CardImage>
      <CardType>
        <span>{card.type ? card.type : '-'}</span>
      </CardType>
      <CardDesc>
        <span>{card.desc ? card.desc : '-'}</span>
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
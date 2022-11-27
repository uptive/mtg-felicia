import React from 'react';
import { CardWrapper, CardName, CardImage, CardType, CardPower, CardDesc, Image } from './styles';
import { useSelector } from 'react-redux';

function Card({ card }) {
  const cards = useSelector(state => state.form.cards);
  const randomImage = cards[Math.floor(Math.random() * cards.length)];

  return (
    <CardWrapper>
      <CardName>
        <span>{card?.name ? card.name : 'Name'}</span>
        <span>{card?.cost ? card.cost : 'Cost'}</span>
      </CardName>
      <CardImage>
        <Image template={card?.image === undefined} src={card?.image ? card?.image : randomImage?.image_uris?.art_crop} />
      </CardImage>
      <CardType>
        <span>{card?.type ? card.type : 'Type'}</span>
      </CardType>
      <CardDesc>
        <span>{card?.desc ? card.desc : 'Description'}</span>
        {card?.power || card?.toughness && (
          <CardPower>
            <span>{card?.power ? card.power : '-'}</span>
            /
            <span>{card?.toughness ? card.toughness : '-'}</span>
          </CardPower>
        )}
      </CardDesc>
    </CardWrapper>
  );
}

export default Card; 
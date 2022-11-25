import React, { useEffect, useState } from 'react';
import { CardWrapper, CardName, CardImage, CardType, CardPower, CardDesc, Image } from './styles';
import { GetRandomCard } from '../../services/CardService';
import { LoadingSpinner } from '../theme';

function Card({ card }) {
  const [randomImage, setRandomImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    GetRandomCard()
      .then(data => {
        const image = data.image_uris.art_crop;
        setRandomImage(image);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);

  return (
    <CardWrapper>
      <CardName>
        <span>{card?.name ? card.name : 'Name'}</span>
        <span>{card?.cost ? card.cost : 'Cost'}</span>
      </CardName>
      <CardImage>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Image template={card?.image === undefined} src={card?.image ? card.image : randomImage} />
        )}
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
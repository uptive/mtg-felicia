import React, { useState } from 'react';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { ImageContainer, ImageWrap, Image, ButtonsContainer, Label } from './styles';

function ImageCarousel({ }) {
  const [current, setCurrent] = useState(0);
  const cardsArray = useSelector(state => state.form.cards);

  const checkImage = (card) => {
    if (card.image_uris) {
      if (card.image_uris.png) {
        return card.image_uris.png;
      }
      else {
        return card.image_uris.small;
      }
    }
    if (!card.image_uris) {
      return card.card_faces[0].image_uris.png;
    }
    else { return '' }
  };

  function nextImage() {
    if (current < cardsArray.length) {
      setCurrent(current === cardsArray.length - 1 ? 0 : current + 1);
    }
  }

  function prevImage() {
    if (current >= 1) {
      setCurrent(current === 0 ? cardsArray.length - 1 : current - 1);
    }
  }

  return (
    <ImageContainer>
      <div>
        {cardsArray.map((card, index) => {
          return (
            <ImageWrap current={index === current} key={card.id}>
              <Image src={checkImage(card)} />
            </ImageWrap>
          )
        })}
      </div>
      <ButtonsContainer>
        <FaCaretLeft onClick={() => prevImage()} />
        <Label>{current + 1}/{cardsArray?.length}</Label>
        <FaCaretRight onClick={() => nextImage()} />
      </ButtonsContainer>
    </ImageContainer>
  )
}

export default ImageCarousel;
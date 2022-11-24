import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { GetCardImage } from '../../../services/CardService';

const ImageContainer = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

const ImageWrap = styled.div`
  ${props => props.current ?
    'display: block; transition-duratation: 1s;' :
    'display: none; transition-duratation: 1s ease;'}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: -2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  cursor: pointer;
`;

const Label = styled.span`
  color: ${Colors.white}; 
`;

function ImageCarousel({ cards }) {
  const length = cards?.length;
  const [current, setCurrent] = useState(0);

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
    if (current < cards.length) {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  }

  function prevImage() {
    if (current >= 1) {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
  }

  return (
    <ImageContainer>
      <div>
        {cards.map((card, index) => {
          return (
            <ImageWrap current={index === current} key={card.id}>
              <Image src={checkImage(card)} />
            </ImageWrap>
          )
        })}
      </div>
      <ButtonsContainer>
        <FaCaretLeft onClick={() => prevImage()} />
        <Label>{current + 1}/{cards?.length}</Label>
        <FaCaretRight onClick={() => nextImage()} />
      </ButtonsContainer>
    </ImageContainer>
  )
}

export default ImageCarousel;
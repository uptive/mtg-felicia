import styled from 'styled-components';
import { Colors } from '../theme';

export const CardWrapper = styled.div`
  background-color: ${Colors.darkPurple};
  padding: 1rem;
  border-radius: .5rem;
  height: 350px;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.darkGray};
  padding: .5rem;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
`;

export const CardImage = styled.div`
  background-color: ${Colors.lightGray};
  height: 9rem;
  widht: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${props => props.template && `
    filter: grayscale(1);
  `}
`;

export const CardType = styled.div`
  background-color: ${Colors.darkGray};
  padding: .5rem;
`;

export const CardDesc = styled.div`
  background-color: ${Colors.lightGray};
  padding: .5rem;
  height: 7.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardPower = styled.div`
  background-color: ${Colors.darkGray};
  position: absolute;
  bottom: -10px;
  right: -5px;
  padding: .2rem .8rem;
  border-radius: .5rem;
`;
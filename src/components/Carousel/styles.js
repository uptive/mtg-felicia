import styled from 'styled-components';
import { Colors } from '../theme';

export const ImageContainer = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

export const ImageDiv = styled.div`
  height: 377px;
`;

export const ImageWrap = styled.div`
  ${props => props.current ?
    'display: block; transition-duratation: 1s;' :
    'display: none; transition-duratation: 1s ease;'}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: -2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  cursor: pointer;
`;

export const Label = styled.span`
  color: ${Colors.white}; 
`;

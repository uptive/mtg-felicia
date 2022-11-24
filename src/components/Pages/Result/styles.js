import { Colors } from '../../theme';
import styled from 'styled-components';

export const ResultContainer = styled.div`
  background-color: ${Colors.lightPurple};
  padding: 1.5rem;
  min-width: 50rem;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const CardWrap = styled.div`
  width: 270px;
`;

export const Label = styled.span`
  color: ${Colors.white};
  margin-bottom: .5rem;
`;

export const Row = styled.div`
  display: flex;
  gap: ${props => props.gap}rem;
  margin-top: ${props => props.margin}rem;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: left;
  ${props => props.center && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

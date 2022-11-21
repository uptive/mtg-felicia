import styled from 'styled-components';

export const Colors = {
  lightGray: '#F2F3F3',
  darkGray: '#CDCFCF',
  primary: '#00A9A5',
  darkPurple: '#230903',
  boxShadow: '#FF1111',
};

export const Container = styled.div`
  background-color: ${Colors.lightGray};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: .5rem 1.5rem;
  ${props => props.primary && `
    background-color: ${Colors.darkPurple};
    color: #FFFFFF;
  `}
  ${props => props.inverted && `
    background-color: #FFFFFF;
    border: ${Colors.darkGray} 1px solid;
  `}
  cursor: pointer;
`;



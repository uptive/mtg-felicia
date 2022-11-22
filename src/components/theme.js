import styled from 'styled-components';

export const Colors = {
  white: '#FFFFFF',
  lightGray: '#F7F8F8',
  darkGray: '#CDCFCF',
  lightPurple: '#9A8C98',
  blue: '#4A4E69',
  darkPurple: '#22223B',
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
    color: ${Colors.white};
    &:hover {
      background-color: ${Colors.blue};
    }
  `}
  ${props => props.inverted && `
    background-color: ${Colors.white};
    border: ${Colors.darkGray} 1px solid;
  `}
  cursor: pointer;
`;



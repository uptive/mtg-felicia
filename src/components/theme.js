import styled from 'styled-components';
import '../index.css';

export const Colors = {
  lightGray: '#F7F8F8',
  darkGray: '#CDCFCF',
  lightPurple: '#533c63',
  darkPurple: '#22223B',
  hoverPurple: '#34134D',
  boxShadow: '#FF1111',
  white: '#FFFFFF',
  red: '#f55442',
  blue: '#429ef5',
  black: '#000000',
  green: '#6dd164',
};

export const Centered = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.span`
  color: ${Colors.white};
  font-size: ${props => props.h1 && '2'}rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  background-color: ${Colors.lightGray};
  min-height: 100vh;
  height: 100%;
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
    `}
    &:hover {
      background-color: ${props => props.primary ? Colors.hoverPurple : Colors.darkGray};
    }
  ${props => props.inverted && `
    background-color: ${Colors.white};
    border: ${Colors.darkGray} 1px solid;
  `}
  cursor: pointer;
  ${props => props.disabled && `
  background-color: ${Colors.lightGray}
  `} 
  &:focus {
    outline: none;
  }
`;

export const LoadingSpinner = styled.div`
  border: 10px solid ${Colors.darkGray};
  border-left: 10px ${Colors.darkPurple} solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;


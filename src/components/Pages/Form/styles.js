import { Colors, Centered } from '../../theme';
import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${Colors.lightPurple};
  padding: 1.5rem;
  padding-right: 2rem;
  min-width: 30rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const FormInputs = styled.input`
  padding: .5rem 0;
  padding-left: .5rem;
  margin-top: .3rem;
  background-color: ${Colors.lightGray};
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const FormSelect = styled.select`
  padding: .5rem;
  margin-top: .3rem;
  background-color: ${Colors.lightGray};
  width: 100%;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 3rem;
`;

export const Row = styled.div`
  display: flex;
  gap: ${props => props.gap}rem;
  margin-bottom: 1rem;
  margin-top: ${props => props.margin}rem;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: left;
  ${props => props.center && `
  ${Centered}
  `}
`;

export const Label = styled.label`
  color: ${Colors.white};
  margin-bottom: .5rem; 
`;

export const ImageDiv = styled.div`
  width: 12rem;
  height: 12rem;
  margin: .3rem 0 0 0;
  ${props => props.isLoading ?
    `background-color: none; border: none;`
    :
    `background-color: ${Colors.lightGray};  border: ${Colors.darkGray} solid 1px;`
  }
  ${Centered}
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageButton = styled.button`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: none;
  background-color: ${Colors.darkPurple};
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.blue};
  } 
`;
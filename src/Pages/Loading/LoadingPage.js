import image from '../../assets/loading.png';
import styled from 'styled-components';
import { Container } from '../../components/theme';
import { GetCardsMatch } from '../../services/CardService';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCards, setError } from '../../store/actionTypes';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
animation: spin 4s linear infinite;
width: 20rem;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`;

function LoadingPage() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.form.querys);
  const navigate = useNavigate();

  useEffect(() => {
    GetCardsMatch(query)
      .then((response) => {
        if (response !== undefined) {
          const array = response.data;
          dispatch(addCards(array));
          dispatch(setError(false));
          navigate('/result');
        }
        if (response.status === 400) {
          dispatch(setError(true));
        }
        if (response.status === 404) {
          dispatch(setError(true));
        }
      })
      .catch((error) => {
        dispatch(setError(true));
        console.log(error)
      })
  }, []);

  return (
    <Container>
      <Image src={image} />
    </Container>
  )
};

export default LoadingPage;
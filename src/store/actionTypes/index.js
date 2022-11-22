//Action types
export const ADD_CARDS = 'ADD_CARDS';
export const GET_CARDS = 'GET_CARDS';
export const SET_QUERY = 'SET_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';

//Actions
export const addCards = (payload) => {
  return {
    type: ADD_CARDS,
    payload,
  }
}
export const getCards = (payload) => {
  return {
    type: GET_CARDS,
    payload,
  }
}
export const setQuery = (payload) => {
  return {
    type: SET_QUERY,
    payload,
  }
}
export const clearQuery = (payload) => {
  return {
    type: CLEAR_QUERY,
    payload,
  }
}



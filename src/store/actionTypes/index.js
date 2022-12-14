//Action types
export const ADD_CARDS = 'ADD_CARDS';
export const GET_CARDS = 'GET_CARDS';
export const SET_QUERY = 'SET_QUERY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
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
export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  }
}
export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  }
}
export const clearQuery = (payload) => {
  return {
    type: CLEAR_QUERY,
    payload,
  }
}



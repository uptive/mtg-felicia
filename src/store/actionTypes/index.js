//Action types
export const GET_CARDS = 'GET_CARDS';

//Actions
export const getCards = (payload) => {
  return {
    type: GET_CARDS,
    payload,
  }
}


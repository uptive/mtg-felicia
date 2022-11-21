import { GET_CARDS } from '../actionTypes';

const initialState = {
  cards: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
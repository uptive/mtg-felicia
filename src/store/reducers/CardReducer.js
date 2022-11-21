import { ActionType } from '../actionTypes';

const initialState = {
  cards: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CARDS:
      return {
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
import { SET_QUERY, ADD_CARDS } from '../actionTypes';

const initialState = {
  cards: [],
  querys: {
    name: '',
    // type: '',
    // cost: undefined,
    // image: '',
    // desc: '',
    // power: undefined,
    // toughness: undefined,
  }
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        cards: action.payload,
      };
    case SET_QUERY:
      return {
        querys: { ...state.querys, action }
      }
    default:
      return state;
  }
};

export default cardsReducer;
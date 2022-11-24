import { SET_QUERY, ADD_CARDS, CLEAR_QUERY, SET_LOADING } from '../actionTypes';

const initialState = {
  cards: [],
  querys: {
    name: '',
    type: '',
    cost: '',
    image: '',
    desc: '',
    power: '',
    toughness: '',
  },
  loading: false,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case SET_QUERY:
      return {
        ...state,
        querys: action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case CLEAR_QUERY:
      return {
        state: undefined,
      }
    default:
      return state;
  }
};

export default formReducer;
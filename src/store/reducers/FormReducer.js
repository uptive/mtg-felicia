import { SET_QUERY, ADD_CARDS, CLEAR_QUERY, SET_LOADING, SET_ERROR } from '../actionTypes';

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
  error: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cards: action.payload,
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
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case CLEAR_QUERY:
      return {

      }
    default:
      return state;
  }
};

export default formReducer;
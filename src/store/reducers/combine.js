import { combineReducers } from 'redux';
import formReducer from './FormReducer';

const reducers = combineReducers({
  form: formReducer,
});

export default reducers;


import { combineReducers } from 'redux';
import { PeopleReducer } from './reducers'

export default combineReducers({
  people: PeopleReducer
});
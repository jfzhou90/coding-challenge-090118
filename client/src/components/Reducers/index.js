import { combineReducers } from 'redux';
import { PeopleReducer } from '../DataTable'

export default combineReducers({
  people: PeopleReducer
});
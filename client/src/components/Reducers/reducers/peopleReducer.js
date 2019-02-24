import { ADD_PEOPLE, FETCH_PEOPLE } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload.data || [];
    case ADD_PEOPLE:
      return [...state, action.payload.data]
    default:
      return state;
  }
}


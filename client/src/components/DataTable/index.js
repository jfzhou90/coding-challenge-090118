//--------------- Imports ----------------//
// Components
import DataTable from './dataTable';

// Actions
import { 
  FETCH_PEOPLE, 
  fetchPeople, 
  ADD_PEOPLE, 
  addPeople
} from './actions';

// Reducers
import { 
  PeopleReducer
} from './reducers';

//-------------- Exports ------------------//
export {DataTable} ;

export { 
  FETCH_PEOPLE,
  fetchPeople, 
  ADD_PEOPLE, 
  addPeople
};
export { 
  PeopleReducer
};

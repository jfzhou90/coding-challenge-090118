import axios from 'axios';
export const ADD_PEOPLE = 'add_people';

export const addPeople = data => {
  const response = axios.post('/api/data/add', data);

  return { type: ADD_PEOPLE, payload: response }
}
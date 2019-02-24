import axios from 'axios';
export const FETCH_PEOPLE = 'fetch_people';

export const fetchPeople = () => {
  const response = axios.get('/api/data/fetch');
  return { type: FETCH_PEOPLE, payload: response }
}
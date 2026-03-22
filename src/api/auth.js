import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export async function signUp(body) {
  const { data } = await axios.post('users/signup', body);
  return data;
}

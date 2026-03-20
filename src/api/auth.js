import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export async function registration(body) {
  const { data } = await axios.post('users/signup', body);
  return data;
}

import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';

const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('user');
    setAuthorizationToken(false);
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('user', token);
      setAuthorizationToken(token);
    });
  }
}

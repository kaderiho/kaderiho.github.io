import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
};

export const login = (userData) => {
    return dispatch => {
        return axios.post('/auth/login', userData).then((res) => {
            const token = res.data.token;

            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);

            dispatch(setCurrentUser(jwtDecode(token)))
        });
    }
};

export const logout = () => {
  return dispatch => {
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
  }
};
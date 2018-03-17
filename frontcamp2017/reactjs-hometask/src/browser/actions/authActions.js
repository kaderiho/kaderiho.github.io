import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';
import jwt from 'jsonwebtoken';

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

            dispatch(setCurrentUser(jwt.decode(token)))
        });
    }
};
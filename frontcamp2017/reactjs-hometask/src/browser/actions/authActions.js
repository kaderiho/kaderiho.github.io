import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const login = (userData) => {
    return dispatch => {
        return axios.post('/auth/login', userData).then((res) => {
            const token = res.data.token;

            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);

            console.log(jwt.decode(token));
        });
    }
};
import axios from 'axios';

export const login = (userData) => {
    return dispatch => {
        return axios.post('/auth/login', userData)
    }
};
import axios from 'axios';

export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post('/signup', userData)
    }
};
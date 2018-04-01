import authReducer from '../../src/browser/reducers/auth';
import { SET_CURRENT_USER } from '../../src/browser/actions/types';

describe('Auth Reducer', () => {

    it('Has a default state', () => {
        expect(authReducer(undefined, {type: 'undefined'})).toEqual({
            isAuthenticated: false,
            user: {}
        });
    });

    it('SET_CURRENT_USER - login action works fine', () => {
        const initialState = { isAuthenticated: false, user: {} };
        const user = { password: 'qwerty123', email: 'email' };

        expect(authReducer(initialState, {type: SET_CURRENT_USER, user: user})).toEqual({
            isAuthenticated: true,
            user: user
        })
    });

    it('SET_CURRENT_USER - logout action works fine', () => {
        const initialState = { isAuthenticated: false, user: {} };

        expect(authReducer(initialState, {type: SET_CURRENT_USER, user: {}})).toEqual({
            isAuthenticated: false,
            user: {}
        })
    });

});
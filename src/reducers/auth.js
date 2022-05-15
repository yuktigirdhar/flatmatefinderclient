import {
    SET_AUTH_TOKEN, 
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR, 
    RESET_UPDATED_USER
} from '../actions/auth';
import {
    UPDATE_CURRENT_USER
} from '../actions/user';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    updatedUser: false,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS || action.type === UPDATE_CURRENT_USER) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser,
            updatedUser: action.updatedUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === RESET_UPDATED_USER) {
        return Object.assign({}, state, {
            updatedUser: false
        });
    }
    return state;
}

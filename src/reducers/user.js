import {
    SET_LOOKING_FOR,
    DISPLAY_ALL_USERS,
    SET_SELECTED_USER,
    SET_SELECTED_USER_MATCH,
    SET_REDIRECT_DISPLAY_FALSE,
    SET_CURRENT_CHAT,
    SAVE_LAT_LONG,

} from '../actions/user';

const initialState = {
    looking_for: null,
    profileMatches: [],
    selectedUser: null,
    selectedUserMatch: null,
    redirectDisplayed: false,
    currentChat: null,
    latLong: null,
    updatedUser: false
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_LOOKING_FOR) {
        return Object.assign({}, state, {
            looking_for: action.looking_for
        });
    } else if (action.type === DISPLAY_ALL_USERS) {
        return Object.assign({}, state, {
            profileMatches: action.users
        });
    } else if (action.type === SET_SELECTED_USER) {
        return Object.assign({}, state, {
            selectedUser: action.user,
            redirectDisplayed: true
        })
    } else if (action.type === SET_SELECTED_USER_MATCH) {
        return Object.assign({}, state, {
            selectedUserMatch: action.match,
        })
    } else if (action.type === SET_REDIRECT_DISPLAY_FALSE) {
        return Object.assign({}, state, {
            redirectDisplayed: false
        })
    } else if (action.type === SET_CURRENT_CHAT) {
        return Object.assign({}, state, {
            currentChat: action.currentChat
        })
    }
    else if (action.type === SAVE_LAT_LONG) {
        return Object.assign({}, state, {
            latLong: action.latLong
        })
    }
    
    return state;
}

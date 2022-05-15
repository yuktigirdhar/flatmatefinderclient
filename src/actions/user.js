import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


// THIS IS OURS. WILL NEED TO BE REWORKED 
export const DISPLAY_ALL_USERS = 'DISPLAY_ALL_USERS'; 
export const displayAllUsers = users => ({
    type: DISPLAY_ALL_USERS, 
    users
}); 

// THIS IS OURS. VERY GENERAL, NEEDS TO BE EDITED TO RUN ALGORITHM. RIGHT NOW JUST FETCHES ALL

export const getAllUsers = (user) => dispatch => {
    return fetch(`${API_BASE_URL}/api/users/filter`, {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(users => {
        dispatch(displayAllUsers(users))
    }); 
}

export const SET_LOOKING_FOR = 'SET_LOOKING_FOR';
export const setLookingFor = (looking_for) => ({
    type: SET_LOOKING_FOR, 
    looking_for
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const updateCurrentUser = (currentUser) => ({
    type: UPDATE_CURRENT_USER,
    currentUser,
    updatedUser: true
})

export const saveQuestions = (user) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {return res.json()})
        .then(res => dispatch(updateCurrentUser(res.user)))     
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


export const filterUsers = (user) => dispatch => {
    return fetch(`${API_BASE_URL}/api/users/filter`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => console.log(res.json()))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const SET_SELECTED_USER = "SET_SELECTED_USER"; 
export const setSelectedUser = user => ({
    type: SET_SELECTED_USER, 
    user
}); 

export const SET_SELECTED_USER_MATCH = "SET_SELECTED_USER_MATCH"; 
export const setSelectedUserMatch = match => ({
    type: SET_SELECTED_USER_MATCH, 
    match
}); 

export const SET_REDIRECT_DISPLAY_FALSE = "SET_REDIRECT_DISPLAY_FALSE"; 
export const setRedirectDisplayFalse = user => ({
    type: SET_REDIRECT_DISPLAY_FALSE 
}); 

export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT"; 
export const setCurrentChat = currentChat => ({
    type: SET_CURRENT_CHAT,
    currentChat
}); 

export const saveCurrentChat = (data) => dispatch => {
    dispatch(setCurrentChat(data.currentChat))
    return fetch(`${API_BASE_URL}/api/users/chat`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // .then(res => res.json())
    // .then(user => {
    //     dispatch(setSelectedUser(user))
    // })
    // .then(() => {
    //     dispatch(setRedirectDisplayFalse())
    // });  
}
 

export const getSelectedUser = (username) => dispatch => {
    return fetch(`${API_BASE_URL}/api/users/${username}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(user => {
        dispatch(setSelectedUser(user))
    })
    .then(() => {
        dispatch(setRedirectDisplayFalse())
    });  
}

export const lookupLatLong = (city, state, address) => dispatch => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state},+${address}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(location => {
        dispatch(saveLatLong(location.results[0].geometry.location))
    })
}

export const lookupLatLong2 = (city, state) => dispatch => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(location => {
        dispatch(saveLatLong(location.results[0].geometry.location))
    })
}

export const SAVE_LAT_LONG = "SAVE_LAT_LONG"; 
export const saveLatLong = (latLong) => ({
    type: SAVE_LAT_LONG, 
    latLong
}); 
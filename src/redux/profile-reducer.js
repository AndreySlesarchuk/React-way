import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 13},
        {id: 2, message: 'Good day', likesCount: 8},
        {id: 3, message: 'Victory day', likesCount: 7},
        {id: 4, message: 'summer evening', likesCount: 11}
    ],
    newPostText: 'pam.by',
    profile: null,
    status: "Hello my great world"
}

const profileReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

// if only returns value
export const addPostActionCreator = () => ({type: ADD_POST})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

//thunk
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(response.data));
            }
        });
}

export default profileReducer;
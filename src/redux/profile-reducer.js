import {profileAPI, usersAPI} from '../api/api'

const ADD_POST = 'atmm/auth/ADD-POST'
const SET_USER_PROFILE = 'atmm/auth/SET_USER_PROFILE'
const SET_STATUS = 'atmm/auth/SET_STATUS'
const DELETE_POST = 'atmm/auth/DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 11},
        {id: 2, message: 'Good day', likesCount: 9},
        {id: 3, message: 'Happy year', likesCount: 9},
        {id: 4, message: 'Summer evenings', likesCount: 11}
    ],
    profile: null,
    status: "Hello my great world!"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
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
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

//thunk---
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer

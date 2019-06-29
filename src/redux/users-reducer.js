const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 13},
        {id: 2, message: 'Good morning', likesCount: 8},
        {id: 3, message: 'Yup', likesCount: 7},
        {id: 4, message: 'Hug', likesCount: 11}
    ],
    newPostText: 'www.atmm.by'
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
// if only returns value
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default usersReducer;
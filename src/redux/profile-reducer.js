const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 13},
        {id: 2, message: 'Good morning', likesCount: 8},
        {id: 3, message: 'Hello world', likesCount: 7},
        {id: 4, message: 'Good night', likesCount: 11}
    ],
    newPostText: 'www.atmm.ru'
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
        default:
            return state;
    }
}
// if only returns value
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default profileReducer;
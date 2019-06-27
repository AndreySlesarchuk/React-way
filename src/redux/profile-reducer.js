const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 13},
        {id: 2, message: 'Whats are you?', likesCount: 8},
        {id: 3, message: 'All right', likesCount: 7},
        {id: 4, message: 'Nigh is right', likesCount: 11}
    ],
    newPostText: 'www.atmm.by'
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
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
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
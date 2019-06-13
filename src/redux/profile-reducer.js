const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Study good my friend!!', likesCount: 13},
        {id: 2, message: 'Hello my world!!', likesCount: 7},
        {id: 3, message: 'Good morning!', likesCount: 11},
        {id: 4, message: 'Yup yup yup', likesCount: 8}
    ],
    newPostText: 'atmm.by'
}


const profileReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
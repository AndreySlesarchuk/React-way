const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    users: [
        {id: 1, fullname: 'Andrey', status: 'I am a boss', location: {city: 'Minsk', country:'Belarus'}},
        {id: 2, fullname: 'Bogdan', status: 'I am a boss', location: {city: 'Kiev', country:'Ukraine'}},
        {id: 3, fullname: 'Andrey', status: 'I am a boss', location: {city: 'Moskow', country:'Russia'}},
        {id: 4, fullname: 'Fedor', status: 'I am a boss', location: {city: 'Pinsk', country:'Belarus'}},
    ]
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
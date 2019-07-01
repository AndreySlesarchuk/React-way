const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    users: [
        {id: 1, followed: true, fullname: 'Andrey', status: 'I am a boss', location: {city: 'Minsk', country:'Belarus'}},
        {id: 2, followed: false, fullname: 'Bogdan', status: 'I am a boss', location: {city: 'Kiev', country:'Ukraine'}},
        {id: 3, followed: true, fullname: 'Valya', status: 'I am a boss', location: {city: 'Moskow', country:'Russia'}},
        {id: 4, followed: true, fullname: 'Mike', status: 'I am a boss', location: {city: 'Pinsk', country:'Belarus'}},
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
// if only returns value
export const followActionCreator = () => ({type: FOLLOW})
export const unfollowActionCreator = () => ({type: UNFOLLOW})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default usersReducer;
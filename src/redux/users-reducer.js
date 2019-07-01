const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: true, fullname: 'Andrey', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullname: 'Bogdan', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, followed: true, fullname: 'Valya', status: 'I am a boss', location: {city: 'Moskow', country: 'Russia'}},
        {id: 4, followed: true, fullname: 'Mike', status: 'I am a boss', location: {city: 'Pinsk', country: 'Belarus'}},
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
// if only returns value
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
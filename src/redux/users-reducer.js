const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullname: 'Andrey',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullname: 'Bogdan',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 3,
            followed: true,
            fullname: 'Valya',
            status: 'I am a boss',
            location: {city: 'Moskow', country: 'Russia'}
        },
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

        default:
            return state;
    }
}
// if only returns value
export const followActionCreator = () => ({type: FOLLOW, userId})
export const unfollowActionCreator = () => ({type: UNFOLLOW, userId})

export default usersReducer;
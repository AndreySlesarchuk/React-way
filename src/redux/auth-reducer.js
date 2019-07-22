const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}
// ActionCreator -> AC -> none (followAC -> follow)
export const setUserDats = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export default authReducer;
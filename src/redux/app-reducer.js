import {getAuthUserData} from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
};

const appReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, // the strategic thing
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
    })
}

export default appReducer
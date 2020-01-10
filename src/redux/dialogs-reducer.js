const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Tana'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Andrey'},
        {id: 4, name: 'Valentina'},
    ],
    messages: [
        {id: 1, message: 'Happy birthday!!!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Hello my dear friend!'},
        {id: 4, message: 'Study'},
        {id: 5, message: 'Good night'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;
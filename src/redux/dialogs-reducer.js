const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Tana'},
        {id: 4, name: 'Andrey'},

    ],
    messages: [
        {id: 1, message: 'Good morning'},
        {id: 2, message: 'Hello World!'},
        {id: 3, message: 'How is your react?'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'Good day'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
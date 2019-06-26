const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Tana'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Andrey'},

    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Nice'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'Good night'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {


    let stateCopy = {
        ...state,
        //messages: [...state.messages]
    };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
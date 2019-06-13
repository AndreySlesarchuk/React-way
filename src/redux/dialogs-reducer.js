const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Tana'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Vasiliy'},
        {id: 6, name: 'Natasha'},
        {id: 7, name: 'Seva'}

    ],
    messages: [
        {id: 1, message: 'Hi all'},
        {id: 2, message: 'Hello World!'},
        {id: 3, message: 'How is your react-way?'},
        {id: 4, message: 'Yup'},
        {id: 5, message: 'Good day'},
        {id: 6, message: 'Good night'},
        {id: 7, message: 'How are you?'},
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
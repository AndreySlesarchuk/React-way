const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Study good my friend', likesCount: 13},
                {id: 2, message: 'Hello my world!', likesCount: 7},
                {id: 3, message: 'Good morning!', likesCount: 11},
                {id: 4, message: 'Yup yup yup', likesCount: 8}
            ],
            newPostText: 'atmm.by'
        },
        dialogsPage: {
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
        },
        mapPage: {
            lat: 53.9,
            lng: 27.5,
            zoom: 7
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

// if only returns value
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;


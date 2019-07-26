import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Study my dear friend!!', likesCount: 13},
                {id: 2, message: 'Hello my world!!', likesCount: 7},
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state); // notified the subscriber | уведомили подписчика

    }
}

export default store;
window.store = store;
//store - OOP


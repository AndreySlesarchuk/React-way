let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Study good my friend', likesCount: 13},
                {id: 2, message: 'Hello my world!!!', likesCount: 7},
                {id: 3, message: 'Good night', likesCount: 11},
                {id: 4, message: 'Yo yo yo', likesCount: 8}
            ],
            newPostText: 'atmm.by'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tana'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Mike'},
                {id: 4, name: 'Vasily'},
                {id: 5, name: 'Andrey'},
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
//store = OOP

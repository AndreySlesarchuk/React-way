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
    getState() {
        return _state;
    },
    rerenderEntireTree() {
        console.log('State was changed');
    },
    addPost() {
        newPost: {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    },
    updateNewPostText(newText) {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    },
    subscribe (observer) {
        rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;

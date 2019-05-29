import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Study good my friend', likesCount: 13},
            {id: 2, message: 'Hello my world!!!', likesCount: 7},
            {id: 3, message: 'Good night', likesCount: 11}
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
            {id: 6, name: 'Natasha'}

        ],
        messages: [
            {id: 1, message: 'Hi all'},
            {id: 2, message: 'Hello World!'},
            {id: 3, message: 'How is your react-way?'},
            {id: 4, message: 'Yup'},
            {id: 5, message: 'Good day'},
            {id: 6, message: 'Good night'}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
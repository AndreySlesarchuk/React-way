import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message: 'Study good my friend', likesCount: 13},
    {id:2, message: 'Hello my world!!!', likesCount: 7},
    {id:3, message: 'Yups!', likesCount: 11}]

let dialogs = [
    {id:1, name: 'Tana'},
    {id:2, name: 'Masha'},
    {id:3, name: 'Mike'},
    {id:4, name: 'Vasily'},
    {id:5, name: 'Andrey'}
]

let messages = [
    {id:1, message: 'Hi all'},
    {id:2, message: 'Hello World!'},
    {id:3, message: 'How is your react-way?'},
    {id:4, message: 'Yup'},
    {id:5, message: 'Good day'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

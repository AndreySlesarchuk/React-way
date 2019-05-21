import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
let messagesElements = messages.map(m => <Message message={m.message}/>);

const  Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

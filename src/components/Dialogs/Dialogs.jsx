import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialogItem}>
            <NavLink to={path} activeClassName={c.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.dialog}>{props.message}</div>
    )
}

let dialogs = [
    {id:1, name: 'Tana'},
    {id:2, name: 'Masha'},
    {id:3, name: 'Mike'},
    {id:4, name: 'Andrey'},
    {id:5, name: 'Vasiliy'}
]

let messages = [
    {id:1, message: 'Hi'},
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

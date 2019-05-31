import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const  Dialogs = (props) => {

    let dialogsElements = props.store.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.store.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
            <h3> Message </h3>
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={props.store.addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

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

const  Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name="Tana" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Mike" id="3"/>
                <DialogItem name="Masha" id="4"/>
                <DialogItem name="Sergiei" id="5"/>
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='How is your react-way?'/>
                <Message message='Yup'/>
            </div>
        </div>

    )
}

export default Dialogs;

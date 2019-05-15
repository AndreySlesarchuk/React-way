import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path} activeClassName={c.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

const  Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name="Tana" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Mike" id="3"/>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>How is your react-way?</div>
                <div className={c.message}>Yup</div>
            </div>
        </div>

    )
}

export default Dialogs;

import React from 'react';
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={c.dialogItem}>
            <NavLink to={path} activeClassName={c.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;


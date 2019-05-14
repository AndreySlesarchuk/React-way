import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.activeDialog}>
                    Tana
                </div>
                <div className={c.dialog}>
                    Andrey
                </div>
                <div className={c.dialog}>
                    Mike
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>How is your react-way?</div>
                <div className={c.message}>Yup</div>
            </div>
        </div>

    )
}

export default Music;

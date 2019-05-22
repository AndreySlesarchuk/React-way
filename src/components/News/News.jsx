import React from "react";
import c from './News.module.css';


const  News = (props) => {
    return (
        <div className={c.news}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.activeDialog}>
                    Tana
                </div>
                <div className={c.news}>
                    Andrey
                </div>
                <div className={c.news}>
                    Mike
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.new}>Hi</div>
                <div className={c.message}>How is your react-way?</div>
                <div className={c.message}>Yup</div>
            </div>
        </div>

    )
}

export default News;

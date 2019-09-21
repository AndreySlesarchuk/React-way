import React from "react";
import c from './News.module.css';
import {NavLink} from "react-router-dom";

const  News = () => {
    return (
        <div className={c.news}>
            <div className={c.newsItem}>
                    <NavLink to={'news/tana'}>Tana</NavLink>
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

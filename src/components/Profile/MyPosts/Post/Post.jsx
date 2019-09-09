import React from 'react';
//import classes from ... changed to c
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
            <img className={c.img} src='https://blog.eu.playstation.com/files/avatars/avatar_467916.jpg' alt=''/>
            {props.message}
            <div>
                <span>like - </span>{props.likesCount} 
            </div>
        </div>
    )
}

export default Post;
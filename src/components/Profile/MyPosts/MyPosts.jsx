import React from 'react';
//import classes from ... changed to c
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are you?' like={5} />
                <Post message='Hello world!!!' like={7} />
                <Post message={'Fine!'} like={11} />
            </div>
        </div>
    )
}

export default MyPosts;
import React from 'react';
//import classes from ... changed to c
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are you?' likesCount='5' />
                <Post message='Hello world!!!' likesCount='7' />
                <Post message='Fine!' likesCount='11' />
            </div>
        </div>
    )
}

export default MyPosts;
import React from 'react';
//import classes from ... changed to c
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message: 'Study hard my friend', likesCount: 13},
        {id:2, message: 'Ok my world!!!', likesCount: 7},
        {id:3, message: 'Yup!', likesCount: 11},
    ]

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
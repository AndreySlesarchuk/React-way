import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
           <textarea onChange={props.onChange} ref={props.ref} value={props.value}/>
        </div>
        <div>
            <button onClick={props.onClick}>Add post</button>
        </div>
    </form>;
}

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost();
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
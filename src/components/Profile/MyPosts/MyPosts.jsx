import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
           <Field name = "newPostText" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
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
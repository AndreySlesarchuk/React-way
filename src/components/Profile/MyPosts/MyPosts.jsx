import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLength2, required} from "../../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
           <Field name = "newPostText" component="textarea"
                  validate={[required, maxLength30, minLength2]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
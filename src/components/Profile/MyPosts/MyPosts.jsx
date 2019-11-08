import React, {Component} from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
           <Field name = "newPostText" component={Textarea} placeholder={"Post message"}
                  validate={[required, maxLength30, minLength2]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

class MyPosts extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("RENDER YO");
        let postElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
        let newPostElement = React.createRef();
        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
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
}

export default MyPosts;
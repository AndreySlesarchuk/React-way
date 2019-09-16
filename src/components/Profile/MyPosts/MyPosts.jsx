import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

function AddNewPostForm(props) {
    return <form>
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

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
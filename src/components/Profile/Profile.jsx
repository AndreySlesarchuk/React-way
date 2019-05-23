import React from 'react';
//import classes from ... changed to c
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        {id:1, message: 'Study hard my friend', likesCount: 13},
        {id:2, message: 'Ok my world!!!', likesCount: 7},
        {id:3, message: 'Yup!', likesCount: 11}]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;
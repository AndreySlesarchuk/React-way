import React from 'react';
//import classes from ... changed to c
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
    return <div className={c.content}>
        <div>
            <img src='https://cdn-images-1.medium.com/max/1600/1*CvjclMDwgh9AqED_h5UVCA.jpeg' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;
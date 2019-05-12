import React from 'react';
//import classes from ... changed to c
import c from './Profile.module.css'

const Profile = () => {
    return <div className='content'>
        <div>
            <img src='https://cdn-images-1.medium.com/max/1600/1*CvjclMDwgh9AqED_h5UVCA.jpeg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className={c.item}>
                    post 1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;
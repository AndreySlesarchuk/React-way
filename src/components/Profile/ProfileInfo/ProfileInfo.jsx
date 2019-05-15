import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <img src='https://cdn-images-1.medium.com/max/1600/1*CvjclMDwgh9AqED_h5UVCA.jpeg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
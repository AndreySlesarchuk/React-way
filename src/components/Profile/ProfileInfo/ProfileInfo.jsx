import React from 'react';
import c from './ProfileInfo.module.css'
//<img src='https://cdn-images-1.medium.com/max/1600/1*CvjclMDwgh9AqED_h5UVCA.jpeg'/>

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <img src='https://cdnb.artstation.com/p/assets/images/images/005/754/755/large/jayson-kassis-highresscreenshot00199.jpg?1493552247'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </>
    )
}

export default ProfileStatus;
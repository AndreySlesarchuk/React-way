import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
//import backgroundImage from "../../../assets/images/bg_cells.jpg";

//<img src='https://cdnb.artstation.com/p/assets/images/images/005/754/755/large/jayson-kassis-highresscreenshot00199.jpg?1493552247'/>
//<img src='https://cdn-images-1.medium.com/max/1600/1*CvjclMDwgh9AqED_h5UVCA.jpeg'/>

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={c.content}>
                <img src={backgroundImage}/>
            </div>*/}
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
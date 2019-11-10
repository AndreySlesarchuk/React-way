import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}> Accept </div>
                <div className={c.album}> KINO </div>
                <div className={c.album}> The technology </div>
                <div className={c.album}> Black coffee </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Time machine</div>
                <div className={c.song}>The legend</div>
                <div className={c.song}>Push the button</div>
                <div className={c.song}>Falling leaf</div>
            </div>
        </div>

    )
}

export default Music;

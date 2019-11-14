import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}> Accept </div>
                <div className={c.album}> KINO </div>
                <div className={c.album}> The Technology </div>
                <div className={c.album}> Nirvana </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Shadow soldier's </div>
                <div className={c.song}>The legend</div>
                <div className={c.song}>Push the button</div>
                <div className={c.song}>Rape me</div>
            </div>
        </div>

    )
}

export default Music;

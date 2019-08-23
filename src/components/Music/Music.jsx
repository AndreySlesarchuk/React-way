import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    KINO
                </div>
                <div className={c.album}>
                    Crematory
                </div>
                <div className={c.album}>
                    ARIA
                </div>
                <div className={c.album}>
                    Frank Duval
                </div>
                <div className={c.album}>
                    Chelentano
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>The legend</div>
                <div className={c.song}>garbage wind</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Frank</div>
                <div className={c.song}>UUU eee</div>
            </div>
        </div>

    )
}

export default Music;

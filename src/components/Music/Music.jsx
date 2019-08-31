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
                    KINO
                </div>
                <div className={c.album}>
                    ARIA
                </div>
                <div className={c.album}>
                    Iron Maiden
                </div>
                <div className={c.album}>
                    KINO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Knock</div>
                <div className={c.song}>Night</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Seven son</div>
                <div className={c.song}>April</div>
            </div>
        </div>

    )
}

export default Music;

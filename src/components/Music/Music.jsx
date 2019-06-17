import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Highland
                </div>
                <div className={c.album}>
                    Elza's ocean
                </div>
                <div className={c.album}>
                    Splin
                </div>
                <div className={c.album}>
                    Aria
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Solo Tu</div>
                <div className={c.song}>Autumn</div>
                <div className={c.song}>Кomance</div>
                <div className={c.song}>Rose Street</div>
            </div>
        </div>

    )
}

export default Music;

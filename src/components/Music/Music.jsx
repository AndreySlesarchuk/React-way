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
                    UDO
                </div>
                <div className={c.album}>
                    Helloween
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    Aria
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Solo to</div>
                <div className={c.song}>Crying soldier</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Fiends</div>
            </div>
        </div>

    )
}

export default Music;

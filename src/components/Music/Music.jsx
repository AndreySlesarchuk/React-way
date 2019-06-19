import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Tender May
                </div>
                <div className={c.album}>
                    Metallica
                </div>
                <div className={c.album}>
                    Helloween
                </div>
                <div className={c.album}>
                    Accept
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>White roses</div>
                <div className={c.song}>Nothing else matter</div>
                <div className={c.song}>A tale the wasn't right</div>
                <div className={c.song}>Kill the pain</div>
            </div>
        </div>

    )
}

export default Music;

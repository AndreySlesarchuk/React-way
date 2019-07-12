import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Technology
                </div>
                <div className={c.album}>
                    Blackmore's Night
                </div>
                <div className={c.album}>
                    ARIA
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    UDO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Push the button</div>
                <div className={c.song}>Soldier Of Fortune (Live in Paris 2006) HD</div>
                <div className={c.song}>1100</div>
                <div className={c.song}>Symphony No. 40 (OFFICIAL LIVE VIDEO)</div>
                <div className={c.song}>Crying soldier</div>
            </div>
        </div>

    )
}

export default Music;

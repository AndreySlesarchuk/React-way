import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    BI-2
                </div>
                <div className={c.album}>
                    ACCEPT
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
                <div className={c.song}>Птица На Подоконнике</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Seven son</div>
                <div className={c.song}>April</div>
            </div>
        </div>

    )
}

export default Music;

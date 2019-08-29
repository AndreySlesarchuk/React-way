import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    ACCEPT
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
                <div className={c.song}>Princess of the town</div>
                <div className={c.song}>Close the door behind me, I'm leaving</div>
                <div className={c.song}>Careless Angel</div>
                <div className={c.song}>Seven keys</div>
                <div className={c.song}>April</div>
            </div>
        </div>

    )
}

export default Music;

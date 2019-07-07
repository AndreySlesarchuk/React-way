import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    ACCEPT
                </div>
                <div className={c.album}>
                    Axel Rudi Pell
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    UDO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Kill The Pain</div>
                <div className={c.song}>Shadow Soldiers - Restless And Live</div>
                <div className={c.song}>The Temple Of The King(Rainbow´s cover, Live Over Europe)</div>
                <div className={c.song}>Russian's roulet</div>
                <div className={c.song}>Crying soldier</div>
            </div>
        </div>

    )
}

export default Music;

import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Armin van Buren
                </div>
                <div className={c.album}>
                    Aria
                </div>
                <div className={c.album}>
                    Helloween
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    Manovar
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Kazantip</div>
                <div className={c.song}>will and mind</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Princess of the down</div>
                <div className={c.song}>Kings of metal</div>
            </div>
        </div>

    )
}

export default Music;

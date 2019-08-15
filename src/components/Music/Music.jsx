import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Vertinski
                </div>
                <div className={c.album}>
                    Visotski
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
                <div className={c.song}>Banana Limon Singapure</div>
                <div className={c.song}>Crazy Horses</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Russian winter</div>
                <div className={c.song}>Crying soldier</div>
            </div>
        </div>

    )
}

export default Music;

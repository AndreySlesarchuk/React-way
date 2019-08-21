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
                    Kris de Burg
                </div>
                <div className={c.album}>
                    ARIA
                </div>
                <div className={c.album}>
                    Frank Duval
                </div>
                <div className={c.album}>
                    UDO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Night</div>
                <div className={c.song}>Ladie in red</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Frank</div>
                <div className={c.song}>Crying soldier</div>
            </div>
        </div>

    )
}

export default Music;

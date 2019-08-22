import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Аукцион
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
                    Chelentano
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Летел и таял https://www.youtube.com/watch?v=jq4O145-jCg</div>
                <div className={c.song}>Ladie in red</div>
                <div className={c.song}>Hero of asphalt</div>
                <div className={c.song}>Frank</div>
                <div className={c.song}>UUU eee</div>
            </div>
        </div>

    )
}

export default Music;

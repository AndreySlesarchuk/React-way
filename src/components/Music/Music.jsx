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
                    Black coffe
                </div>
                <div className={c.album}>
                    Family
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>We are waiting for changes </div>
                <div className={c.song}>Careless Angel</div>
                <div className={c.song}>Wooden churchs of russia</div>
                <div className={c.song}>don't let down and don't disappoint</div>
            </div>
        </div>

    )
}

export default Music;

import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    I
                </div>
                <div className={c.album}>
                    KINO
                </div>
                <div className={c.album}>
                    I
                </div>
                <div className={c.album}>
                    Family
                </div>
                <div className={c.album}>
                    Family
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Just</div>
                <div className={c.song}>The legend</div>
                <div className={c.song}>Do It</div>
                <div className={c.song}>We are looking at you</div>
                <div className={c.song}>don't let down and don't disappoint</div>
            </div>
        </div>

    )
}

export default Music;

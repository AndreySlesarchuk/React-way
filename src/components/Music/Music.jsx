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
                    ACCEPT
                </div>
                <div className={c.album}>
                    UDO
                </div>
                <div className={c.album}>
                    Iron Maiden
                </div>
                <div className={c.album}>
                    Пикник
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Night</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Soldier crying</div>
                <div className={c.song}>Mother russia</div>
                <div className={c.song}>Фиолетово черный</div>
            </div>
        </div>

    )
}

export default Music;

import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    WOLF HOFFMANN (Accept)
                </div>
                <div className={c.album}>
                    Пикник
                </div>
                <div className={c.album}>
                    Кукрыниксы
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    UDO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Pathetique [2017]</div>
                <div className={c.song}>Там на самом на краю земли</div>
                <div className={c.song}>Акварели</div>
                <div className={c.song}>Russian's roulet</div>
                <div className={c.song}>Crying soldier</div>
            </div>
        </div>

    )
}

export default Music;

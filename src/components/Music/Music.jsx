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
                    Черный кофе
                </div>
                <div className={c.album}>
                    Технология
                </div>
                <div className={c.album}>
                    Пикник
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Legenda</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Звездный водоем</div>
                <div className={c.song}>Нажми на кнопку</div>
                <div className={c.song}>Фиолетово черный</div>
            </div>
        </div>

    )
}

export default Music;

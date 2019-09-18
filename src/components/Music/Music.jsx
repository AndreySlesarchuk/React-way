import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    KINO
                </div>
                <div className={c.album}> Пикник </div>
                <div className={c.album}> ACCEPT </div>
                <div className={c.album}> Черный кофе </div>

                <div className={c.album}>
                    Технология
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Legenda</div>
                <div className={c.song}>There at the very edge of the earth</div>
                <div className={c.song}>Russian rulets</div>
                <div className={c.song}>Wooden churchs</div>
                <div className={c.song}>Нажми на кнопку</div>
            </div>
        </div>

    )
}

export default Music;

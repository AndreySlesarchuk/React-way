import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}> Accept </div>
                <div className={c.album}> KINO </div>
                <div className={c.album}> The technology </div>
                <div className={c.album}> Черный кофе </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Time machine</div>
                <div className={c.song}>The legend</div>
                <div className={c.song}>Push the button</div>
                <div className={c.song}>С ветки падающий лист</div>
            </div>
        </div>

    )
}

export default Music;

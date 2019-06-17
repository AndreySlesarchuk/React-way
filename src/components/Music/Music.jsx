import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Highland
                </div>
                <div className={c.album}>
                    Metallica
                </div>
                <div className={c.album}>
                    Black Coffee
                </div>
                <div className={c.album}>
                    Aria
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Solo Tu</div>
                <div className={c.song}>Nothing else matter</div>
                <div className={c.song}>Wooden churches of Russia</div>
                <div className={c.song}>Will and mind</div>
            </div>
        </div>

    )
}

export default Music;

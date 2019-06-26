import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>
                    Armin van Buren
                </div>
                <div className={c.album}>
                    Aria
                </div>
                <div className={c.album}>
                    Tender May
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    Manovar
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Kazantip</div>
                <div className={c.song}>Will and mind</div>
                <div className={c.song}>White roses</div>
                <div className={c.song}>Russian's roulet</div>
                <div className={c.song}>Kings of metal</div>
            </div>
        </div>

    )
}

export default Music;

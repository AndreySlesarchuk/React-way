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
                    Yunona i avos
                </div>
                <div className={c.album}>
                    Accept
                </div>
                <div className={c.album}>
                    Iron maiden
                </div>
                <div className={c.album}>
                    Auction
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Just</div>
                <div className={c.song}>I will never forget you</div>
                <div className={c.song}>Kill the pain</div>
                <div className={c.song}>Seven son of the seven son</div>
                <div className={c.song}>flew and melted</div>
            </div>
        </div>

    )
}

export default Music;

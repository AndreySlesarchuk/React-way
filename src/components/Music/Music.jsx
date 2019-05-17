import React from "react";
import c from './Music.module.css';


const  Music = (props) => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div>
                    Accept
                </div>
                <div className={c.album}>
                    Manovar
                </div>
                <div className={c.dialog}>
                    DIO
                </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Metal heart</div>
                <div className={c.song}>Nothing else matter</div>
                <div className={c.song}>Seven keys of seven sons</div>
            </div>
        </div>

    )
}

export default Music;

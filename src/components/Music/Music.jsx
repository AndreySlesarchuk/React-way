import React from "react"
import c from './Music.module.css'

const  Music = () => {
    return (
        <div className={c.music}>
            <div className={c.musicAlbums}>
                <div className={c.album}>UDO</div>
                <div className={c.album}>Accept</div>
                <div className={c.album}>Accept</div>
                <div className={c.album}>Didier Marouani & SPACE</div>
                <div className={c.album}>Nirvana</div>
                <div className={c.album}>KINO</div>
                <div className={c.album}>The Technology </div>
            </div>
            <div className={c.songs}>
                <div className={c.song}>Crying soldier</div>
                <div className={c.song}>Fall of the Empire</div>
                <div className={c.song}>Shadow soldier's</div>
                <div className={c.song}>April</div>
                <div className={c.song}>From Earth to Mars</div>
                <div className={c.song}>Spanish caravan</div>

                <div className={c.song}>Strange dances</div>
            </div>
        </div>
    )
}

export default Music

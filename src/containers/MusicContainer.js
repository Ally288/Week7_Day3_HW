import React, {useEffect, useState} from "react";
import MusicList from "../components/MusicList";

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getMusic();
    }, [])

    const getMusic = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then((song) => setSongs(song.feed.entry))
    }
    
    return (
        <div className="main-container">
            <MusicList songs={songs} />    
        </div>
    )
}



export default MusicContainer;
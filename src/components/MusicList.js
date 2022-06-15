import React from "react";
import MusicContainer from "../containers/MusicContainer";
import ChartSongs from "./ChartSongs";

const MusicList = ({songs}) => {

    const getSongs = songs.map((song, index) => {
        return <ChartSongs
        chartPosition={index}
        songTitle={song['im:name'].label}
        songArtist={song['im:artist'].label}
        key={index}
        />
    })

    return (
        <>
        <li className="music-list">
            {getSongs}
        </li>
        </>
    )
}

export default MusicList;
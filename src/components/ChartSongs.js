import React from "react";

const ChartSongs =({chartPosition, songTitle, songArtist}) => {

    return (
        <>
        <div className="chart-position">
            <h1>{chartPosition}</h1>
        </div>
        <div className="song-details">
            <h3 className='song-title'>Title: {songTitle}</h3>
            <p className='song-artist'>Artist: {songArtist}</p>
        </div>
        </>
    );
}

export default ChartSongs;
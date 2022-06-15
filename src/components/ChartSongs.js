import React from "react";

const ChartSongs =({chartPosition, songTitle, songArtist}) => {

    return (
        <>
        <div className="chart-position">
            <h1>{chartPosition}</h1>
        </div>
        <div className="song-details">
            <p className='song-title'>{songTitle}</p>
            <p className='song-artist'>{songArtist}</p>
        </div>
        </>
    );
}

export default ChartSongs;
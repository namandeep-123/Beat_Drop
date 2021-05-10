import React, { useRef, useState } from "react";
//import Css
import "./styles/app.scss";
//import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import util
import data from "./data";

function App() {
  //use Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [theme, setTheme] = useState(false);

  //Handler
  const songTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const animation = Math.round((roundCurrent / roundDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const endedHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  return (
    <div className={`App ${libraryStatus ? "libraryy-active" : ""}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        theme={theme}
        setTheme={setTheme}
      />

      <Song currentSong={currentSong} theme={theme} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        theme={theme}
        setTheme={setTheme}
      />
      <audio
        onLoadedMetadata={songTimeHandler}
        onTimeUpdate={songTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={endedHandler}
      ></audio>
    </div>
  );
}

export default App;

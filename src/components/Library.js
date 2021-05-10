import React from "react";
import LibrarySong from "./LibrarySong";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  theme,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
      <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </div>
  );
};
export default Library;

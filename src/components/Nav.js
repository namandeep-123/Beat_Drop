import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";

const Nav = ({ libraryStatus, setLibraryStatus, theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };
  return (
    <nav>
      <h1>BEAT-DROP</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
      {/* <button
        onClick={() => setThemeColour(!themeColour)}
        className={themeColour ? "active-dark-colour" : ""}
      >
        {themeColour ? "Light Theme" : "Dark Theme"}
      </button> */}
      <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <button onClick={toggleTheme}>
            {theme ? "Light Theme" : "Dark Theme"}
          </button>
        </>
      </ThemeProvider>
    </nav>
  );
};

export default Nav;

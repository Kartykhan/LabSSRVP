import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // console.log(theme, toggleTheme);

    return (
        <div className={`container-${theme}`}>
        {/* // <div> */}
        {/* <h2>Смены темы(отвратительно, пофиксить)</h2> */}
        <button onClick={toggleTheme}>Поменять тему</button>
            
            
            
        </div>
    )
}

export default ThemeToggle;


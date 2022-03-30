import React from "react";
import classes from "./Header.module.css";
import HistoryOperation from "./HistoryOperation";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1> React Calculator </h1>
            <HistoryOperation/>
        </header>
    );
}

export default Header;
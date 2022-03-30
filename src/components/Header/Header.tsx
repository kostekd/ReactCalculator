import React from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
    const mockFunction = () => {
        console.log("Essa");
    };
    return (
        <header className={classes.header}>
            <h1> React Calculator </h1>
            <Button label="History" onButtonClick={mockFunction} />
        </header>
    );
}

export default Header;
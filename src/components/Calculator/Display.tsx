import React from "react";
import classes from "./Display.module.css";

interface DisplayProps{
    mathExpression: String
}

const Display = (props : DisplayProps) => {
    return <div className={classes.display}>
        <h1>{props.mathExpression}</h1>
    </div>
}

export default Display;
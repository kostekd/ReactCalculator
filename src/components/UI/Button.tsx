import React from "react";
import classes from './Button.module.css';

interface ButtonProps {
    label: String,
    onButtonClick: Function,
}

const Button = (props : ButtonProps) => {
    return (
        <button onClick={() => props.onButtonClick(props.label)} className={classes.button}>{props.label}</button>
    );
};

export default Button;
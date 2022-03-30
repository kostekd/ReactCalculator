import React from "react";
import Button from "./Button";
import classes from './Modal.module.css';

interface ModalOverlayProps {
    onButtonClick : Function;
    elementsToRender: JSX.Element[];
}

const ModalOverlay = (props : ModalOverlayProps) => {

    return (
      <div className={classes.modal}>
        <h2>Operation history</h2>
        <ul>
            {props.elementsToRender}
        </ul>
        <Button label="Close" onButtonClick={props.onButtonClick} />
      </div>
    );
  };

  export default ModalOverlay;
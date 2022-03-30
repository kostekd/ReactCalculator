import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

interface ModalProps{
    onCloseHandler: Function;
    elementsToRender: JSX.Element[];
}

const Modal = (props : ModalProps) => {
    const portalDestination : HTMLElement = document.getElementById('overlay') as HTMLElement;

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalDestination)}
            {ReactDOM.createPortal(<ModalOverlay elementsToRender={props.elementsToRender} onButtonClick={props.onCloseHandler}/>, portalDestination)}
        </Fragment>
    );
}

export default Modal;
import React, { useContext, useState } from "react";
import HistoryContext from "../../store/history-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const HistoryOperation = () => {
    const[historyVisible, setHistoryVisible] = useState(false);
    const ctx = useContext(HistoryContext);

    const listOfOperations = ctx.items.map(operation => <li>{operation}</li>)

    const onclickHistoryHandler = (label : String) => {
        if(!historyVisible){
            setHistoryVisible(true);
        }
    }

    const onCloseHistoryHandler = (label : String) => {
        if(historyVisible){
            setHistoryVisible(false);
        }
    }
    return<div>
        {historyVisible && <Modal onCloseHandler={onCloseHistoryHandler} elementsToRender={listOfOperations}/>}
        <Button label="History" onButtonClick={onclickHistoryHandler} />
    </div>;
}

export default HistoryOperation;
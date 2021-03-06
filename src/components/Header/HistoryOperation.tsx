import React, { useContext, useState } from "react";
import HistoryContext from "../../store/history-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./HistoryOperation.module.css";

const HistoryOperation = () => {
  const [historyVisible, setHistoryVisible] = useState(false);
  const ctx = useContext(HistoryContext);

  const listOfOperations = ctx.items.map((operation) => (
    <li className={classes["list-element"]}>
      <h2>{operation}</h2>
      <Button label="Delete" onButtonClick={()=> {ctx.deleteItem(operation)}}></Button>
    </li>

  ));

  const onclickHistoryHandler = (label: String) => {
    if (!historyVisible) {
      setHistoryVisible(true);
    }
  };

  const onCloseHistoryHandler = (label: String) => {
    if (historyVisible) {
      setHistoryVisible(false);
    }
  };
  return (
    <div>
      {historyVisible && (
        <Modal
          onCloseHandler={onCloseHistoryHandler}
          elementsToRender={listOfOperations}
        />
      )}
      <Button label="History" onButtonClick={onclickHistoryHandler} />
    </div>
  );
};

export default HistoryOperation;

import React from "react";

const HistoryContext = React.createContext({
    items: [],
    addItem: (item : String) => {},
    deleteItem: (str: String) => {}
})

export default HistoryContext;
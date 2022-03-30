import React from "react";

const HistoryContext = React.createContext({
    items: [],
    addItem: (item : String) => {},
})

export default HistoryContext;
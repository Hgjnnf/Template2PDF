import { initialState, reducer } from "./Reducer";
import React, { useReducer } from "react";

export const context = React.createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateList = (list) => {
    dispatch({
      type: "UPDATE_LIST",
      payload: list,
    });
  };

  const clearList = () => {
    dispatch({
      type: "CLEAR_LIST",
    });
  };

  const saveFile = (file) => {
    dispatch({
      type: "SAVE_FILE",
      payload: file,
    });
  };

  const clearFile = () => {
    dispatch({
      type: "CLEAR_FILE",
    });
  };

  const value = {
    ...state,
    updateList,
    clearList,
    saveFile,
    clearFile,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

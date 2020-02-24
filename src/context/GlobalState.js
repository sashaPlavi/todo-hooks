import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    {
      text: "learn about react hooks",
      isComplete: false,
      id: 1
    },
    {
      text: "meet friends for lunch",
      isComplete: false,
      id: 2
    },
    {
      text: "learn somethin about php",
      isComplete: false,
      id: 3
    },
    {
      text: "learn laravel",
      isComplete: false,
      id: 4
    }
  ]
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions

  const addTodo = todo => {
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

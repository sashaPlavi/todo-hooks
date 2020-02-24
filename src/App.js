import React from "react";
import "./App.css";

import { TodoList } from "./componetns/TodoList";
import { TodoForm } from "./componetns/TodoForm";
import { GlobalProvider } from "./context/GlobalState";

export const App = () => {
  // const addTodo = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // };

  // const completeTodo = index => {
  //   //console.log(index);

  //   const newTodos = [...todos];
  //   newTodos[index].isComplete = true;
  //   setTodos(newTodos);
  // };

  return (
    <GlobalProvider>
      <div className="app">
        <TodoList />
        <TodoForm />
      </div>
    </GlobalProvider>
  );
};

export default App;

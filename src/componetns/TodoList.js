import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useContext(GlobalContext);
  console.log(todos);

  return (
    <>
      <h1>Todos</h1>
      <ul className="list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
          />
        ))}
      </ul>
    </>
  );
};

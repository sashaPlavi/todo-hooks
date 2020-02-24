import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useContext(GlobalContext);
  console.log(todos);

  return (
    <>
      <h3>Todos</h3>
      <ul className="list">
        {todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </>
  );
};

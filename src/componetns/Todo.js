import React from "react";

export const Todo = props => {
  return (
    <div
      className="todo"
      //   style={{ textDecoration: todo.isComplete ? "line-through" : "underline" }}
    >
      {props.text}
      <div>
        <button> Complete</button>
      </div>
    </div>
  );
};

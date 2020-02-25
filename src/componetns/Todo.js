import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Todo = props => {
  const { deleteTodo, completeTodo } = useContext(GlobalContext);
  console.log(props);

  const mystyle = {
    textDecoration: props.isComplete ? "line-through" : ""
  };
  return (
    <div className="todo" style={mystyle}>
      <p>{props.text}</p>
      <div style={{ display: "flex" }}>
        <div>
          <button
            onClick={() => completeTodo(props.id)}
            className="complete-btn"
          >
            Complete
          </button>
        </div>
        <div>
          <button onClick={() => deleteTodo(props.id)} className="delete-btn">
            x
          </button>
        </div>
      </div>
    </div>
  );
};

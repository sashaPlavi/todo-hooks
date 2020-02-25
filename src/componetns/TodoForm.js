import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TodoForm = () => {
  const [text, setText] = React.useState("");
  const { addTodo } = useContext(GlobalContext);
  const handleSubmit = e => {
    e.preventDefault();
    if (text) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text,
        is_completed: false
      };
      console.log(newTodo);

      addTodo(newTodo);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="add todo..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

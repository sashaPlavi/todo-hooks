import React from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="add todo..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

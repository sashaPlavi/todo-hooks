export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "COMPLETE_TODO":
      const completed = state.todos.find(el => el.id === action.payload);
      completed.isComplete = true;
      const notCompleted = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return {
        ...state,

        todos: [...notCompleted, completed]
      };
    default:
      return state;
  }
};

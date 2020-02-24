export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        transactions: [action.payload, ...state.todos]
      };
    default:
      return state;
  }
};

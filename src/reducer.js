const initialState = { value: 2 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RANDOM":
      return {
        ...state,
        value: state.value + Math.round(Math.random() * 10 || -10),
      };
    case "ZERO":
      return { ...state, value: state.value * 0 };
    default:
      return state;
  }
};
export default reducer;

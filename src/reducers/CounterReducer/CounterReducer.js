export const initialCounterState = {
  count: 0,
};
export const counterReducerFunc = (state = initialCounterState, action) => {
  switch (action.type) {
    case "ICREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      if (state.count <= 0) {
        alert("Neg count not allowed");
        return state;
      } else {
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
};

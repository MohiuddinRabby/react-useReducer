const initialState = {
  counter: {
    count: 0,
  },
};
export const CounterReducerThree = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { counter: { count: state.counter.count + 1 } };
    //   return state;
    default:
      return state;
  }
};

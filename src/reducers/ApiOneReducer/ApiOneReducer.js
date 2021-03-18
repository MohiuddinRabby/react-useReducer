const initialState = {
  apiData: [],
};
export const ApiOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_API_DATA":
      return { apiData: action.payload };
    default:
      return state;
  }
};

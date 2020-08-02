export const iniState = {
  loading: true,
  err: "",
  postData: {},
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        err: "",
        postData: action.payload,
      };
    case "FETCH_err":
      return {
        loading: true,
        err: "something went wrong",
        postData: {},
      };
    default:
      return state;
  }
};

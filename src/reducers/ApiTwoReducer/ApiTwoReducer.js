const initialState = {
  allPostData: [],
  singlePostData: {},
  loading: true,
};
export const ACTIONS = {
  GET_ALL_POST_DATA: "GET_ALL_POST_DATA",
  GET_SINGLE_POST_DATA: "GET_SINGLE_POST_DATA",
};

export const ApiTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_POST_DATA: {
      return {
        ...state,
        allPostData: action.payload,
      };
    }
    case ACTIONS.GET_SINGLE_POST_DATA: {
      return {
        ...state,
        singlePostData: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

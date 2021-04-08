const initialState = {
  taskList: [
    { id: 1, taksName: "Task-one" },
    { id: 2, taksName: "Task-two" },
  ],
};
export const ACTIONS = {
  GET_TASK_DATA: "GET_TASK_DATA",
  ADD_TODO: "ADD_TODO",
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.types) {
    case ACTIONS.GET_TASK_DATA: {
      const tasks = { ...state, taskList: state.taskList };
      console.log(tasks);
      return tasks;
    }
    default: {
      return state;
    }
  }
};

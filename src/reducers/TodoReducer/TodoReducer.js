const initialState = {
  taskList: [
    { id: 1, taskName: "Task one" },
    { id: 2, taskName: "Task two" },
  ],
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASK_DATA": {
      return { ...state, taskList: state.taskList };
    }
    case "ADD_TODO": {
      const newTask = [
        { id: action.payload.id, taskName: action.payload.taskName },
        ...state.taskList,
      ];
      console.log(newTask);
      return { ...state, taskList: newTask };
    }
    default: {
      return "";
    }
  }
};

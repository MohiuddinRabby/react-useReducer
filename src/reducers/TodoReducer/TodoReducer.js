import { ACTIONS } from "./Actions";

const initialState = {
  taskList: [
    { id: 1, taskName: "Task one" },
    { id: 2, taskName: "Task two" },
  ],
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_TASK_DATA: {
      return { ...state, taskList: state.taskList };
    }
    case ACTIONS.ADD_TODO: {
      const newTask = [
        { id: action.payload.id, taskName: action.payload.taskName },
        ...state.taskList,
      ];
      return { ...state, taskList: newTask };
    }
    case ACTIONS.DELETE_TODO: {
      console.log("todo");
      return {
        taskList: state.taskList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    }
    default: {
      return state;
    }
  }
};

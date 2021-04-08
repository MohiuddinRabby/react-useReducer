import React from "react";
import Todo from "./components/Todo/Todo";
import { TodoContextProvider } from "./contexts/TodoContext/TodoContext";

const App = () => {
  return (
    <div>
      <TodoContextProvider>

      <Todo />
      </TodoContextProvider>
    </div>
  );
};

export default App;

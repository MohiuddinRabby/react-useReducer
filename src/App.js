import React from "react";
import ApiOne from "./components/ApiOne/ApiOne";
import { ApiOneContextProvider } from "./contexts/ApiOneContext/ApiOneContext";

const App = () => {
  return (
    <div>
      <ApiOneContextProvider>
        <ApiOne />
      </ApiOneContextProvider>
    </div>
  );
};

export default App;

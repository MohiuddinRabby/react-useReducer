import React from "react";
import CounterOne from "./components/Counter/CounterOne";

import { CounterContextProvider } from "./contexts/CounterContext/CounterContext";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <CounterOne />
      </CounterContextProvider>
    </>
  );
};

export default App;

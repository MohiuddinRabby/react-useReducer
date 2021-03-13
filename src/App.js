import React from "react";
import CounterOne from "./components/Counter/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";

import { CounterContextProvider } from "./contexts/CounterContext/CounterContext";
import { CounterContextTwoProvider } from "./contexts/CounterContextTwo/CounterContextTwo";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <CounterOne />
      </CounterContextProvider>
      <CounterContextTwoProvider>
        <CounterTwo />
      </CounterContextTwoProvider>
    </>
  );
};

export default App;

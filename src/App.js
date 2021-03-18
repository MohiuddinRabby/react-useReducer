import React from "react";
import CounterOne from "./components/Counter/CounterOne";
import CounterThree from "./components/CounterThree/CounterThree";
import CounterTwo from "./components/CounterTwo/CounterTwo";

import { CounterContextProvider } from "./contexts/CounterContext/CounterContext";
import { CounterContextThreeProvider } from "./contexts/CounterContextThree/CounterContextThree";
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
      <CounterContextThreeProvider>
        <CounterThree />
      </CounterContextThreeProvider>
    </>
  );
};

export default App;

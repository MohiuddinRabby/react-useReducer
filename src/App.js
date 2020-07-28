import React from "react";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import PatientManagement from "./components/PatientManagement/PatientManagement";
import ReducerCountTwo from "./components/ReducerCountTwo/ReducerCountTwo";

const App = () => {
  return (
    <div>
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      <ReducerCountTwo></ReducerCountTwo>
    </div>
  );
};

export default App;

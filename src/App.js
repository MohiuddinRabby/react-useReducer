import React from "react";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import PatientManagement from "./components/PatientManagement/PatientManagement";
import ReducerCountTwo from "./components/ReducerCountTwo/ReducerCountTwo";
import Datafetching from "./components/Datafetching/Datafetching";
import DatafetchingTwo from "./components/DatafetchingTwo/DatafetchingTwo";

const App = () => {
  return (
    <div>
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      <ReducerCountTwo></ReducerCountTwo>
      <Datafetching></Datafetching>
      <DatafetchingTwo></DatafetchingTwo>
    </div>
  );
};

export default App;

import React from "react";
import ApiTwo from "./components/ApiTwo/ApiTwo";
import { ApiTwocontextProvider } from "./contexts/ApiTwoContext/ApiTwoContext,";

const App = () => {
  return (
    <div>
      <ApiTwocontextProvider>
        <ApiTwo />
      </ApiTwocontextProvider>
    </div>
  );
};

export default App;

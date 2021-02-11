import React from "react";
import "./App.css";
import { MissionConatiner } from "./components/Mission/index";
import { MissionInfo } from "./components/MIssion_Info/index";

const App = () => {
   return (
      <div className="App">
         <MissionConatiner />
         {/* <MissionInfo /> */}
      </div>
   );
};

export default App;

import React,{useState} from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./component/Home";




function App() {

  const [daynight,setDaynight] = useState(true)
  return (
    <div className="">
      <Navbar daynight={daynight} setDaynight={setDaynight} />
      <Home daynight={daynight} setDaynight={setDaynight} />
      
      
    </div>
  );
}

export default App;

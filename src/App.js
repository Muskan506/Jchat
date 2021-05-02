import React from "react";
import socketIOClient from "socket.io-client";
// import Cookies from "./js.cookie.mjs"
import "./App.css";
// import Script from "./components/Script";
import Dashboard from "./components/Dashboard";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";


function App() {
   const[state,setState]=React.useState(true);
  //  const socket = socketIOClient("http://localhost:3000/chat");
  // console.log(socket)
  return (
    <div>
      {/* <Script/> */}
      <Dashboard />
      

    </div>
  );
}

export default App;

import React from "react";
import "../App.css";

import Sidebar from "./ChatComponents/Sidebar";
import MainChat from "./ChatComponents/MainChat";
import InfoUser from "./ChatComponents/InfoUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Chat = () => {
  return (
    <div className="app_body">
      <Router>
        <Switch>
          <Route>
        <Sidebar />
            <MainChat />
            <InfoUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Chat;

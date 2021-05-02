import React from "react";
import { GoNote } from "react-icons/go";
import { BiUserPin, BiBot } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { BsChatSquareQuote } from "react-icons/bs";
import {
  AiFillSetting,
  AiOutlinePlusSquare,
  AiOutlineMail,
  AiOutlineBars,
} from "react-icons/ai";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import "../App.css";
import colors from "../assets/color";
import Chat from "./Chat";
import Users from "./User";
import Settings from "./Settings";
import Bot from "./Bot";

const chat = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    chat
  </Tooltip>
);
const user = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Users
  </Tooltip>
);
const analytics = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Analytics
  </Tooltip>
);
const setup = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Setup Guide
  </Tooltip>
);
const setting = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Settings
  </Tooltip>
);
const bot = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Bot
  </Tooltip>
);
const Dashboard = () => {
  // const [state, setState] = React.useState([]);
  // const popup = () => {
  //   setState(!state);
  // };

  return (
    <Router>
      <div style={{ overflow: "hidden", overflowY: "hidden" }}>
        {/* <div
          style={{
            height: 60,
            width: "100vw",
            backgroundColor: colors.bgDarkBlue,
          }}
        ></div> */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: colors.bgDarkBlue,
              height: "100vh",
              width: 63,
            }}
          >
            <div style={{ color: colors.bgWhite }}>
              <div>
                <ul style={{ paddingLeft: 3, marginTop: 20 }}>
                  <li className="dropdown ">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={chat}
                    >
                      <Link
                        to="/chat"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          className="py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BsChatSquareQuote size={27} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="dropdown">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={user}
                    >
                      <Link
                        to="/user"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          className=" py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BiUserPin size={30} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="dropdown">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={analytics}
                    >
                      <Link
                        to="/analytics"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          className=" py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <SiGoogleanalytics size={28} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="dropdown">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={setup}
                    >
                      <Link
                        to="/setup-guide"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          className="hover:bg-gray-700 py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <IoBookSharp size={25} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="dropdown">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={setting}
                    >
                      <Link
                        to="/setting"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          className="hover:bg-gray-700 py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <AiFillSetting size={25} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="dropdown">
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={bot}
                    >
                      <Link
                        to="/bot"
                        style={{ textDecorationLine: "none", color: "#fff" }}
                      >
                        <button
                          
                          className="hover:bg-gray-700 py-4 rounded-lg transition-all duration-300 ease-in-out dropbtn"
                          style={{
                            width: 50,
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                         
                          <BiBot size={25} />
                        </button>
                      </Link>
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "100vh",
              width: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Route path="/" exact component={Chat} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/user" exact component={Users} />
            <Route path="/setting" exact component={Settings} />
            <Route path="/bot" exact component={Bot} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

import { Avatar, IconButton } from "@material-ui/core";

import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import React, { useEffect, useRef, useState } from "react";
// import firebase from "firebase";
import "./Chat.css";
import { Cancel, InsertEmoticonOutlined } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
function MainChat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();
  useEffect(() => {
    state.name = prompt("enter your name");
  }, []);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4001");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <p
        key={index}
        className={`chat_message ${name === state.name && "chat_reciver"}`}
      >
        <span className="chat_name">{name}</span>
        {message}
        <span className="chat_timestamp">9:30pm</span>
      </p>
    ));
  };

  return (
    <div className="chat">
    
      <div className="chat_header">
        <div className="flex">
          <div className="chat_logo flex justify-center items-center text-xl">
            {/* {userName[0]} */}
          </div>
          <div className="chat_headerInfo">
            {/* <h3>{userName}</h3> */}
            <h3>hey</h3>
            <p>
              Last seen:-
              {/* {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toLocaleTimeString("en-IN")} */}
            </p>
          </div>
        </div>
        <div>
          <span className="text-sm">Assigned To:</span>
          <select className="focus:outline-none rounded h-7 border-gray-400 w-28 pl-1 text-sm ml-2">
            <option selected value="eboyo">
              Eboyo
            </option>
            <option value="yash">Yash</option>
            <option value="akshay">Akshay</option>
            <option value="shubham">Shubham</option>
          </select>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <Cancel />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">{renderChat()}</div>
       <div className="chat_footer">
        <InsertEmoticonOutlined />
        <form action="#" id="send-container" onSubmit={onMessageSubmit}>
          <input
          id="messageInp"
             type="text"
             name="message"
             value={state.message}
             onChange={(e)=>onTextChange(e)}
            placeholder="Type your message here ..."
          />
          <div className="send">
          <button id="sendbtn" type="submit">
            Send
          </button></div>
           </form>
      </div>
    </div>
  );
}

export default MainChat;

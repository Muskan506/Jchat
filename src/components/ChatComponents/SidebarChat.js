import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="hover:bg-gray-300 sidebarChat">
      <div className="flex">
        <Avatar />
        <div className="sidebarChat_info">
          <h2>Any Name</h2>
          <p> Hey</p>
        </div>
      </div>
      <div className="sidebar_date">9:30pm</div>
    </div>
  );
}

export default SidebarChat;

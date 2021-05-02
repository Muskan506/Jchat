import { SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db from "./Firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   db.collection("users")
  //     .orderBy("createdAt", "desc")
  //     .onSnapshot((snapshot) =>
  //       setUser(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header shadow-lg bg-white">
        <h2 className="mr-12">My Chats</h2>
        <h2>All Chats</h2>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="search chats" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        {/* {user.map((u) => (
          <SidebarChat key={u.id} id={u.id} name={u.data.name} />
        ))} */}
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./CSS/Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Sidebar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/849/423/original/fluid-abstract-blue-background-free-vector.jpg"
          alt=""
        />
        <div className="profile__details">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <p>Web Devloper</p>
        </div>
        <div className="profile__stats">
          <span>Who viewed your profile</span>
          <span className="stat_number">20</span>
        </div>
        <div className="profile__stats">
          <span>
            Connections
            <br />
            <b>Grow your Network</b>
          </span>
          <span className="stat_number">150</span>
        </div>
      </div>
      <div className="sidebar__recnt">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>Branding
        </p>
        <p className="hash">
          <span>#</span>Marketing
        </p>
        <p className="hash">
          <span>#</span>Web Devlopment
        </p>
        <p className="hash">
          <span>#</span>
          Programming
        </p>
        <p className="hash">
          <span>#</span>
          React js
        </p>
        <p className="hash">
          <span>#</span>Redux-toolkit
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

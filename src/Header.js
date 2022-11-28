import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "./CSS/Header.css";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="head">
      <div className="header__left">
        <div className="header__logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt=""
          />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={Avatar} title={user.displayName} />
      </div>
    </div>
  );
};

export default Header;

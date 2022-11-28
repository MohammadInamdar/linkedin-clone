import React from "react";
import { Avatar } from "@mui/material";
import "./CSS/Header.css";
import { useSelector } from "react-redux";

import { selectUser } from "./features/userSlice";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const HeaderOption = ({ Icon, title, avatar }) => {
  const user = useSelector(selectUser);
  return (
    <div className="header__option">
      {Icon && <Icon></Icon>}
      {avatar && (
        <Avatar
          name={avatar}
          src={user.photoURL}
          onClick={(e) => firebase.auth().signOut()}
        />
      )}

      <span>{title}</span>
    </div>
  );
};

export default HeaderOption;

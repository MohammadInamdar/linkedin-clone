import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import Post from "./Post";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";
import "./CSS/feed.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "This is my web site",
      message: input,
      photoURL: user.photoURL,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={user.photoURL} />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit"></input>
          </form>
        </div>
        <div className="feed__options">
          <div className="option">
            <PhotoIcon style={{ color: "#07b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <TodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;

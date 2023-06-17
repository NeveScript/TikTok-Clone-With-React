import React, { useRef, useState } from "react";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video({ likes, comments, shares, username, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>

      <VideoSidebar likes={likes} comments={comments} shares={shares} />
      <VideoFooter
        username={username}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;

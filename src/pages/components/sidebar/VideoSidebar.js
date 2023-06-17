import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import "./videoSidebar.css";

function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__actions" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? ++likes : likes}</p>
      </div>

      <div className="videoSidebar__actions">
        <CommentIcon fontSize="large" />
        <p>{comments}</p>
      </div>

      <div className="videoSidebar__actions">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;

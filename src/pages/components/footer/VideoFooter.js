import React from "react";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import "./videoFooter.css";

function VideoFooter({ username, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> @{username} </h3>
        <p> {description} </p>

        <div className="videoFooter__music">
          <AudiotrackIcon className="videoFooter__musicNoteIcon" />
          <div className="videoFooter__musicName">
            <p> {music}</p>
          </div>
        </div>
      </div>

      <img
        className="videoFooter__record"
        alt="Image of a vinyl record spinning"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;

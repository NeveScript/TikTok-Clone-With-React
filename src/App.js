import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./configs/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videoSnapshot = await getDocs(videoCollection);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              username={item.username}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
        {/*
        <Video
          likes={200}
          comments={310}
          shares={350}
          username="@user2"
          description="Cool description 02"
          music="Epic music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
       */}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          comments={110}
          shares={150}
          username="@user1"
          description="Cool description 01"
          music="Epic music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={200}
          comments={310}
          shares={350}
          username="@user2"
          description="Cool description 02"
          music="Epic music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        <Video
          likes={300}
          comments={310}
          shares={350}
          username="@user3"
          description="Cool description 03"
          music="Epic music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
      </div>
    </div>
  );
}

export default App;

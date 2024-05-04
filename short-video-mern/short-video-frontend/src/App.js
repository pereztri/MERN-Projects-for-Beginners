import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './components/axios';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
        const res = await axios.get("/v2/posts")
        setVideos(res.data)
        return res
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {/* <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/
          v1608169738/video1_cvrjfm.mp4"
          channel="nabendu82"
          description="Macbook Air to new Windows editing beast"
          song="I am a Windows PC"
          likes={345}
          dislikes={222}
          shares={200}
          messages={90}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/
          v1608169739/video2_mecbdo.mp4"
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          dislikes={222}
          shares={290}
          messages={109}
        /> */}

        {/* <Video />
        <Video /> */}

        {videos.map(({ url, channel, description, song, likes, dislikes, shares, messages }) => (
            <Video 
              key={url} 
              url={url} 
              channel={channel} 
              description={description} 
              song={song} 
              likes={likes} 
              dislikes={dislikes}
              shares={shares} 
              messages={messages} 
            />
          ))}
      </div>
    </div>
  );
}

export default App;

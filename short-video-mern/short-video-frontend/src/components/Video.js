import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({ url, channel, description, song, likes, dislikes, shares, messages }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            {/* <video 
                src="/96DBAB8D-2AD0-4FDA-A376-38AAA432C921.MOV"
                // src="https://youtube.com/shorts/xfbiPCQV088?feature=share"
                // src="https://youtube.com/shorts/xfbiPCQV088?feature=share"
                // src={url}
                className="video__player"
                loop
                controls
                ref={videoRef}
                onClick={handleVideoPress}
            >
            </video> */}
            <iframe 
                // src={`https://www.youtube.com/embed/xfbiPCQV088`}
                src={`https://www.youtube.com/embed/${url.split('/').pop().split('?')[0]}`}
                // src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="video__player"
                loop
                controls
                ref={videoRef}
                onClick={handleVideoPress}
            />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} dislikes={dislikes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video

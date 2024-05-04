import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';  // Import the dislike icon

const VideoSidebar = ({ likes, dislikes, shares, messages }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false);  // State for dislike

    const toggleLike = () => {
        if (disliked) {
            setDisliked(false);  // Remove dislike if video is liked
        }
        setLiked(!liked);
    };

    const toggleDislike = () => {
        if (liked) {
            setLiked(false);  // Remove like if video is disliked
        }
        setDisliked(!disliked);
    };

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {/* { liked ? <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} /> : <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} /> }
                <p>{liked ? +likes + 1 : likes}</p> */}
                {liked ? ( <FavoriteIcon fontSize="large" onClick={toggleLike} /> ) : ( <FavoriteBorderIcon fontSize="large" onClick={toggleLike} /> )}
                <p>{liked ? +likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                {disliked ? ( <ThumbDownIcon fontSize="large" onClick={toggleDislike} style={{ color: 'red' }} /> ) : ( <ThumbDownIcon fontSize="large" onClick={toggleDislike} /> )}
                <p>{disliked ? +dislikes + 1 : dislikes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar

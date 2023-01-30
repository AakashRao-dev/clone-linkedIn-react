import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import FeedInputOption from '../FeedInputOption/FeedInputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <FeedInputOption Icon={ThumbUpOffAltIcon} title="Like" />
        <FeedInputOption Icon={ChatBubbleOutlineIcon} title="Comment" />
        <FeedInputOption Icon={AutorenewIcon} title="Repost" />
        <FeedInputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}
export default Post;

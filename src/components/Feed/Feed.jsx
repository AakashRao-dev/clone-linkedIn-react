import React, { useState, useEffect } from 'react';
import './Feed.css';
import FeedInputOption from '../FeedInputOption/FeedInputOption';
import FeedInputModal from '../FeedInputModal/FeedInputModal';
import Post from '../Post/Post';

import { db } from '../../firebase';

import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Feed() {
  const [show, setShow] = useState(false);

  // for posts
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      {/* Feed Input */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <div className="feed__inputPost">
            <Avatar
              className="feed__inputAvatar"
              src="https://media.licdn.com/dms/image/C4D03AQG8sUE3LoeqJw/profile-displayphoto-shrink_100_100/0/1652069982475?e=1680134400&v=beta&t=X6EFHFxkeh9B1ajUI7GZCFSeV9KFNS78C3az-4zIrig"
            />
            <button onClick={() => setShow(true)} className="feed__inputButton">
              Start a post...
            </button>
            <FeedInputModal onClose={() => setShow(false)} show={show} />
          </div>

          <div className="feed__inputOptions">
            <FeedInputOption Icon={ImageIcon} title="Photo" />
            <FeedInputOption Icon={SmartDisplayIcon} title="Video" />
            <FeedInputOption Icon={WorkIcon} title="Job" />
            <FeedInputOption Icon={NewspaperIcon} title="Write Article" />
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map(post => (
        <Post />
      ))}
      <Post
        name="Aakash Rao"
        description="This is a description"
        message="Playing with React & Firebase"
      />
    </div>
  );
}
export default Feed;

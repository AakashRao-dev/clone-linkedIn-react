import React from 'react';
import './FeedInputModal.css';

import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function FeedInputModal({ show, onClose, sendPost }) {
  if (!show) {
    return null;
  }

  return (
    <div className="inputModal">
      <div className="inputModal__content">
        <div className="inputModal__top">
          <h4 className="inputModal__title">Create a post</h4>
          <button className="inputModal__close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="inputModal__message">
          <div className="inputModal__profileinfo">
            <Avatar
              className="inputModal__avatar"
              src="https://media.licdn.com/dms/image/C4D03AQG8sUE3LoeqJw/profile-displayphoto-shrink_100_100/0/1652069982475?e=1680134400&v=beta&t=X6EFHFxkeh9B1ajUI7GZCFSeV9KFNS78C3az-4zIrig"
            />
            <p>Aakash Rao</p>
          </div>

          {/* textarea */}
          <div className="inputModal__textarea">
            <input type="text" placeholder="What do you want to talk about?" />
          </div>
        </div>

        <div className="inputModal__bottom">
          <div className="inputModal__options">
            <ImageIcon />
            <SmartDisplayIcon />
            <NewspaperIcon />
          </div>
          <button onClick={sendPost} className="inputModal__button">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default FeedInputModal;

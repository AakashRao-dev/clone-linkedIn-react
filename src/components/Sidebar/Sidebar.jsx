import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';

function Sidebar() {
  const recentItem = topic => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  const groupsFollowed = name => {
    return (
      <div className="sidebar__groupItem">
        <GroupIcon className="sidebar__groupIcon" />
        <p>{name}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.licdn.com/dms/image/C4D16AQH78LmAA7LQAQ/profile-displaybackgroundimage-shrink_350_1400/0/1657080760826?e=1680134400&v=beta&t=8lI4C0C-56ophV9fLR64buPzc85E9uIzTmzEiF_KopM"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://media.licdn.com/dms/image/C4D03AQG8sUE3LoeqJw/profile-displayphoto-shrink_100_100/0/1652069982475?e=1680134400&v=beta&t=X6EFHFxkeh9B1ajUI7GZCFSeV9KFNS78C3az-4zIrig"
        />
        <h2>Aakash Rao</h2>
        <h4>
          ∙ 14k @Twitter ∙ Frontend Web Developer ∙ Freelance Technical Writer ∙
          UI Designer ∙ Open-Source Enthusiast
        </h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">174</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your posts</p>
          <p className="sidebar__statNumber">36</p>
        </div>
      </div>

      <div className="sidebar__bookmark">
        <BookmarkIcon />
        <p>My Items</p>
      </div>

      <div className="sidebar__recent">
        <h4>Recent</h4>
        {recentItem('react.js')}
        {recentItem('All things JavaScript...')}
        {recentItem('zerotomastery.io')}
        {recentItem('intership')}
        {recentItem('Frontend Developer')}
        {recentItem('jobseekers')}
      </div>

      <div className="sidebar__group">
        <h4>Groups</h4>
        {groupsFollowed('All thigns JavaScript')}
        {groupsFollowed('zerotomastery.io')}
        {groupsFollowed('Frontend Developer and Web Developers')}
      </div>
    </div>
  );
}
export default Sidebar;

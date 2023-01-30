import React from 'react';
import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />

        <div className="header__search">
          {/* SEARCH ICON */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        {/* <HeaderOption Icon={SearchIcon} title="Search" /> */}
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/C4D03AQG8sUE3LoeqJw/profile-displayphoto-shrink_100_100/0/1652069982475?e=1680134400&v=beta&t=X6EFHFxkeh9B1ajUI7GZCFSeV9KFNS78C3az-4zIrig"
          title="Me"
        />
      </div>
    </div>
  );
}
export default Header;

import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function HeaderOption({ avatar, Icon, title, border }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">
        {title}
        {avatar && <ArrowDropDownIcon className="headerOption__icon--avatar" />}
      </h3>
    </div>
  );
}
export default HeaderOption;

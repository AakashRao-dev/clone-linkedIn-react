import React from 'react';
import './FeedInputOption.css';

function FeedInputOption({ Icon, title }) {
  return (
    <div className={`feed__inputOption feed__inputOption--${title}`}>
      {Icon && <Icon src={Icon} alt={title} />}
      <span>{title}</span>
    </div>
  );
}
export default FeedInputOption;

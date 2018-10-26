import React from 'react';
import './TitleCard.css';
import VideoPlayer from '../VideoPlayer';

export const TitleCard = (props) => {
  return(
    <div className='title-card' >
      <div className='foreground'>
      </div>
      <VideoPlayer image={props.image}   url={props.video[0].key} />
    </div>

  )

}
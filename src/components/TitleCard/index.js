import React from 'react';
import './TitleCard.css';
import VideoPlayer from '../VideoPlayer';

export const TitleCard = (props) => {
  const key = props.video 
    // ? 'jEnIfGQ_UuQ'
    // : props.video.key
  let play = false;
  return(
    <div className='title-card' onClick={() => play = true}>
      <div className='foreground'>
      </div>
      {<VideoPlayer image={props.background}  play={play} />}
    </div>

  )

}
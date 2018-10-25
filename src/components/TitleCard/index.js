import React from 'react';
import './TitleCard.css'

export const TitleCard = (props) => {
  return(
    <div className='title-card'>
      <h2 className='title'>{props.title}</h2>
      <img className='poster' src={`https://image.tmdb.org/t/p/w500/${props.background}`} alt='poop'/>
    </div>

  )

}
import React from 'react';
import './TitlePage.css';

export const TitlePage = ({movie}) => {
  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  )
}
import React from 'react';


export const VideoPlayer = ({ play, url, image, feature }) => {
  
  const videoSrc = `https://www.youtube.com/embed/${url}?autoplay=1&mute=1&modestbranding=1&start=5&controls=0`
    if(play){
    return (
      <div className="background">
        <iframe
          title='movie-trailer'
          className={feature ? 'feature' : 'player'} 
          src={videoSrc}
          frameBorder="0"/>
      </div>
    ) 
  } else {
    return (
    <div className="background">  
      <img className='poster' src={`https://image.tmdb.org/t/p/w500/${image}`} alt='movie-background' />
    </div>
    )
  }
}


export default VideoPlayer;
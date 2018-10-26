import React from 'react'

const VideoPlayer = ({ play, url, image }) => {
  const videoSrc = `https://www.youtube.com/embed/${url}?autoplay=1&rel=1&modestbranding=1`
    if(play){
    return (
      <div className="background">
        <iframe 
          className="player" type="text/html" width="100%" height="100%"
          src={videoSrc}
          frameborder="0"/>
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
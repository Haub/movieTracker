import React, { Component } from 'react';
import './TitleCard.css';
import VideoPlayer from '../VideoPlayer';

export class TitleCard extends Component {
  constructor() {
    super()
    this.state = {
      play: false
    }
  }

  mouseEnter = () => {
    console.log('mouse enter')
    this.setState( { play: true })
  }

  mouseLeave = () => {
      console.log('mouse leave')
      this.setState( { play: false })
  }

  render() {
    const { image, video } = this.props
    return(
      <div className='title-card' 
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className='foreground'>
        </div>
        <VideoPlayer image={image}
          url={video[0].key}
          play={this.state.play}
        />
      </div>
    )
  } 
}
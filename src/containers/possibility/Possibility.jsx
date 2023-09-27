import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
const Possibiility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyong your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente laudantium, aperiam alias nam praesentium dolor quia excepturi fugiat nostrum repellat ducimus necessitatibus repellendus ratione.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibiility

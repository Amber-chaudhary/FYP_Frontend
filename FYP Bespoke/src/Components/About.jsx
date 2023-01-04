import React from 'react'

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
          <img src={props.image} alt='' style={{height:'500px', width: '500px'}}/>
      </div>
      <div className='about-text'>
          <h2>{props.title}</h2>
          <p>hgadu gewdggd rguyqwgey yugeruqw</p>
          <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About

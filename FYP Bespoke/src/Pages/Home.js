import React from 'react';
import Header from '../Components/Header';
import Feature from '../Components/Feature';
import About from '../Components/About';
import Presentation from '../Components/Presentation';
import Contact from '../Components/Contact';
import aboutImage from '../images/Bespoke3.png'
import aboutImage1 from '../images/about3.png'

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <About image={aboutImage} title='About Bespoke' button='Know More'></About>
      <Presentation></Presentation>
      <About className='app__bg' image={aboutImage1} title='Who we are?' button='Know More'></About>
      <Contact></Contact>
    </div>
  )
}

export default Home

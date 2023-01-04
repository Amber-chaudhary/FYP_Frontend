import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_3.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_1.png'

function Feature() {
  return (
    <div id='features' className='app__bg'>
      <div className='a-container'>
          <FeatureBox image={featureimage} title='Customization'></FeatureBox>
          <FeatureBox image={featureimage2} title='Earn Money'></FeatureBox>
          <FeatureBox image={featureimage3} title='Shopping'></FeatureBox>
      </div>
    </div>
  )
}

export default Feature

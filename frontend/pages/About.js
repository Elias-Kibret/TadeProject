import React from 'react'
import SocialMediaIcons from '../components/Icons/SocialMediaIcons'
import about from '../public/Img/About.png'
const About = () => {
  return (
    <div className='grid mx-24 grid-cols-2 h-[500px] text-white mt-20 font-light text-lg text-justify '>

      <div className='mt-28'>
        {/* About  */}
        <p className='my-6 text-lg'>
        I'm a dedicated scholar and researcher. My work has been recognized on numerous occasions. Some of the recognitions include the Emir (Prince) Gold Medal for Academic and Research Excellence, Dissertation Award, and the Graduate Research Award in Sciences in recognition of the research quality, significance, and presentation. I was also honored as a First Place Distinguished Graduate of Class 2022. [Learn more]

My research interests include rehabilitation and strengthening of concrete structures, performance-based design of structures, seismic fragility assessment and resilience of structures, structural optimization, machine learning and its application in engineering, and XAI.

I am passionate and excited to work with active research groups and individuals. I welcome any kind of research collaboration.
        </p>
        <SocialMediaIcons/>
      </div>
      <div className='about'>
        
      </div>
    </div>
  )
}

export default About
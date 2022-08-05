import React from 'react'
import SocialMediaIcons from '../components/Icons/SocialMediaIcons'
import about from '../public/Img/About.png'
import {FaMinus} from 'react-icons/fa'
const About = () => {
  return (
    <div className='grid mx-24 grid-cols-2 h-[600px] text-white mt-20 font-light text-lg text-justify '>

      <div className='mt-28'>
        {/* About  */}
<div>
<h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span>About Me</h2>
<h2 className='text-[#FFFFFF] pt-5 title text-4xl font-extrabold'>Tadesse<span className='text-[#2Ecc71]'> G.Wakjira</span> </h2> 
</div>
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
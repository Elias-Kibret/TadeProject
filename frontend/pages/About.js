import React from 'react'
import SocialMediaIcons from '../components/Icons/SocialMediaIcons'
import about from '../public/Img/About.png'
import {motion} from 'framer-motion'
import {FaMinus} from 'react-icons/fa'
const About = () => {
  return (


<main className="bg-[#000000] hero_whats_main mb-10"  >
  <div className='flex-wrap flex items-center whatNew mx-6 sm:mx-10 md:mx-24'>

  <div className='mt-28 lg:w-[600px]'>
        {/* About  */}
<div>
<h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span>About Me</h2>
<h2 className='text-[#FFFFFF] pt-5 title text-4xl font-extrabold'>Tadesse<span className='text-[#2Ecc71]'> G.Wakjira</span> </h2> 
</div>
        <p className='my-6 text-sm md:text-lg text-white text-justify '>
        I'm a dedicated scholar and researcher. My work has been recognized on numerous occasions. Some of the recognitions include the Emir (Prince) Gold Medal for Academic and Research Excellence, Dissertation Award, and the Graduate Research Award in Sciences in recognition of the research quality, significance, and presentation. I was also honored as a First Place Distinguished Graduate of Class 2022. [Learn more]

My research interests include rehabilitation and strengthening of concrete structures, performance-based design of structures, seismic fragility assessment and resilience of structures, structural optimization, machine learning and its application in engineering, and XAI.

I am passionate and excited to work with active research groups and individuals. I welcome any kind of research collaboration.
        </p>
        <SocialMediaIcons/>
      </div>


<motion.div 
 
className='about' >
 
</motion.div>


  </div>

  
</main>




//     <div>
// <div className='flex flex-col md:flex-row flex-wrap mx-24'>

    
//       <div className='about w-[50%]'>
        
//       </div>

// </div>
//     </div>
  )
}

export default About
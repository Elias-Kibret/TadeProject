import Image from 'next/image'
import Link from 'next/link'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
<main className="bg-[#000000]  mt-16 "  >
<div className='flex flex-col justify-center items-center lg:w-[80%] mx-auto md:flex-row '>

<motion.div
initial={{scale:0.5,opacity:0}}
whileInView={{scale:1 ,opacity:1}}
transition={{duration:0.5,delay:0.3}}

className='awards_hero px-32 flex justify-center items-center ' >
         
  </motion.div>

  <div className='  '>
  <div className='mx-8'>
    <div className='md:mt-32 flex w-full'>
        <motion.h1
        initial={{x:500}}
        whileInView={{x:0}}
        className='text-[#FFFFFF]  title  text-2xl lg:text-6xl'> <span className='text-[#2Ecc71] '>Publication</span> </motion.h1> 
      </div>
      <div className=' sm:flex' >
      <SocialMediaIcons/>
      </div>
  
    </div>
    <div className='mt-10'>
    <div className=' w-2/5 grid grid-cols-3 '>
      
  
       </div>
    </div>
  </div> 


</div>
  
</main>
  )
}

export default Hero
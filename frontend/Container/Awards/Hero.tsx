import Image from 'next/image'
import Link from 'next/link'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
const Hero = () => {
  return (
<main className="bg-[#000000]  mt-16 "  >
<div className='flex flex-col lg:w-[80%] mx-auto sm:flex-row  items-center sm:items-start'>

<div className='awards_hero px-32 flex justify-center items-center ' >
         
  </div>

  <div className='  '>
  <div className='mx-8'>
    <div className='mt-8 md:mt-32 flex w-full'>
        <h1 className='text-[#FFFFFF] text-3xl font-bold lg:text-5xl'>Selected Awards <br/> <span className='text-[#2Ecc71] '>and Recognitions</span> </h1> 
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
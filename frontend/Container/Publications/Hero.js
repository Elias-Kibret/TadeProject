import Image from 'next/image'
import Link from 'next/link'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
const Hero = () => {
  return (
<main className="bg-[#000000]  mt-16 "  >
<div className='w-[80%]   flex items-center '>

<div className='awards_hero  flex justify-center items-center ' >
         
  </div>

  <div className='  '>
  <div className=''>
    <div className='mt-32 flex w-full'>
        <h1 className='text-[#FFFFFF]  title text-6xl'> <span className='text-[#2Ecc71] 
        '>Publications</span> </h1> 
      </div>
      <div className='hidden sm:flex' >
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
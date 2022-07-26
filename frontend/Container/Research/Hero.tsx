import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../../public/Img/TadeRemoved.png'
import profileImage from '../../public/Img/Tade.png'
const Hero = () => {
  return (
<main className="bg-[#000000] h-[650px]  mt-16 ml-10"  >
<div className='xl:pl-24 lg:pl-12 flex items-center justify-between '>
  <div className='w-2/5'>
    <div className='font-[Poppins] text-5xl font-extrabold pt-20'>
      <div className='inline-block title'>
        <h1 className='text-[#FFFFFF] py-5 title'>Publications and  </h1> 
        <h1 className='text-[#2Ecc71]'>Presentations</h1>
      </div>
    </div>
  </div> 
  <div className='w-80 hero-image relative ' >
         <div className='hero-absolute absolute'>

         </div>
  </div>

</div>
  
</main>
  )
}

export default Hero
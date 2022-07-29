import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../../public/Img/TadeRemoved.png'
import profileImage from '../../public/Img/Tade.png'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
const Hero = () => {
  return (
<main className="bg-[#000000] h-[650px]  mt-20 "  >
<div className=' flex items-center justify-between '>
  <div className=' '>
    <div className='font-[Poppins] text-5xl font-extrabold '>
      <div className='inline-block title '>
        <h1 className='text-[#FFFFFF] py-5 title px-10'>Publications and </h1> 
        <h1 className='text-[#2Ecc71]'>Presentations</h1>
        <SocialMediaIcons/>
      </div>
    </div>
  </div> 
  <div className='research-hero hero-image h-[22rem]  xs:ml-[250px]  xl:ml-[100px] sm:h-[25rem] lg:h-[33rem] lg:w-[100%] lg:-mr-36  ' >
         
  </div>

</div>
  
</main>
  )
}

export default Hero
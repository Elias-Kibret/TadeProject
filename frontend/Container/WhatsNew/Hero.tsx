
import Image from 'next/image'
import HeroImage from '../../public/Img/HeroImages/whatsNewHero.png'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
const Hero = () => {
  return (
<main className="bg-[#000000] hero_whats_main mb-10"  >
  <div className='flex-wrap-reverse flex items-center whatNew'>
<div className='hero__WhatsNew ' >
 
</div>

<div className='mx-8'>
<div className='mt-10 md:mt-32 flex w-full'>
    <h1 className='text-[#FFFFFF] pt-5 text-2xl font-semibold md:text-6xl'>What's <span className='text-[#2Ecc71]'>New</span> </h1> 
  </div>
  <div className='hidden sm:flex' >
  <SocialMediaIcons/>
  </div>
  
</div>
  </div>
  <div className='flex items-center justify-center sm:hidden'>
  <SocialMediaIcons/>
  </div>
  
</main>
  )
}

export default Hero
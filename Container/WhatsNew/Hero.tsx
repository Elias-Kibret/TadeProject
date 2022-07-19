
import Image from 'next/image'
import HeroImage from '../../public/Img/HeroImages/whatsNewHero.png'
import SocialMediaIcons from '../../components/Icons/SocialMediaIcons'
const Hero = () => {
  return (
<main className="bg-[#000000] h-[650px] w-4/5 flex items-center justify-between px-24 mt-16 "  >
<div className='hero__WhatsNew relative ' >
 
</div>
<div>
<div className='mt-28'>
    <h1 className='text-[#FFFFFF] pt-5 title  text-5xl
     '>What's <span className='text-[#2Ecc71]'>New</span> </h1> 
    
  </div>
  <div >
  <SocialMediaIcons/>
  </div>
  
</div>
  
</main>
  )
}

export default Hero
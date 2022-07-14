import React from 'react'
import Image from 'next/image'
import hero_Image from '../../public/Img/HeroImages/awardHero.png'
import Link from 'next/link'
import heroImage from '../../public/Img/TadeRemoved.png'
import profileImage from '../../public/Img/Tade.png'
import linkedin from '../../public/Img/Linkedin.svg'
import googleSchoolar from '../../public/Img/googleScholara.svg'
import researchGate from '../../public/Img/ResearchGate.svg'
import orcid from '../../public/Img/orcid.svg'
const Hero = () => {
  return (
<main className="bg-[#000000]  mt-16 "  >
<div className='w-[80%] mx-auto  flex items-center '>

<div className='awards_hero px-32 flex justify-center items-center ' >
         
  </div>

  <div className='  '>
    <div className='font-[Poppins] text-5xl  font-extrabold pt-20'>
      <div className='inline-block title'>
        <h1 className='text-[#FFFFFF] py-5 title
         '>Selected Awards </h1> 
        <h1 className='text-[#2Ecc71]'>and Recognitions</h1>
      </div>
    </div>
    <div className='mt-10'>
    <div className=' w-2/5 grid grid-cols-3 '>
        <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full spaces-x-4 transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/> </a></Link>
        <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/></a></Link>
        <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={googleSchoolar} width={33} height={33} alt="Linkedin"/></a></Link>
  
       </div>
    </div>
  </div> 


</div>
  
</main>
  )
}

export default Hero
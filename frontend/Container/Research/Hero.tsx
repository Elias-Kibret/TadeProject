import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../../public/Img/TadeRemoved.png'
import profileImage from '../../public/Img/Tade.png'

import linkedin from '../../public/Img/Linkedin.svg'
import googleSchoolar from '../../public/Img/googleScholara.svg'
import researchGate from '../../public/Img/ResearchGate.svg'
import orcid from '../../public/Img/orcid.svg'
const Hero = () => {
  return (
<main className="bg-[#000000] h-[650px] w-full mt-16 "  >
<div className='xl:pl-24 lg:pl-12 flex items-center justify-between '>
  <div className='w-2/5'>
    <div className='font-[Poppins] text-5xl font-extrabold pt-20'>
      <div className='inline-block title'>
        <h1 className='text-[#FFFFFF] py-5 title
         '>Publications and  </h1> 
        <h1 className='text-[#2Ecc71]'>Presentations</h1>
      </div>
    
   
    


{/* Social media Icons */}
<div>
<div className=' w-2/5 flex items-center justify-between gap-y-4'>
    <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full spaces-x-4 transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/> </a></Link>
    <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/></a></Link>
    <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={googleSchoolar} width={33} height={33} alt="Linkedin"/></a></Link>
  
   </div>
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
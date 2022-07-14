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
<main className="bg-[#000000] pb-16 w-full  "  >
<div className='xl:pl-24 lg:pl-12 flex items-center justify-between '>
  <div className='w-3/5 mt-16'>
    <div className='font-[Poppins] text-5xl font-extrabold pt-20'>
      <div className='inline-block title'>
        <h1 className='text-[#FFFFFF] py-5 title
         '>Tadesse  </h1> 
        <h1 className='text-[#2Ecc71]'>G.Wakjira, PHD</h1>
      </div>
    
    <p className=' text-xl font-light mt-10 w-3/4 text-gray-300 '>
    I'm a dedicated scholar and researcher. 
    My work has been recognized on numerous occasions. 
    Some of the recognitions include the Emir (Prince) Gold Medal

    </p>
    <div className='text-gray-100 my-10 flex items-start   my-16 ' >
    <button className='text-[#FFFFFF] flex bg-[#2ecc71] text-sm py-3 px-6 rounded-xl '>
        Learn More 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
         <div className='flex ml-24 justify-between'>

      <div className=' flex flex-col   mx-10'>
        
       <div id='triangle-right'  >
          <p className='text-sm -ml-16'>14+</p>
       </div>
       <div>
       <p className='text-sm text mt-3'>Awards <br/>   </p>
       </div>
      </div>
      <div className='mx-10'>

       <div id='triangle-right'  >
          <p className='text-sm text-gray-100 -ml-16'>30+</p> 
       </div>
       <p className='text-sm  mt-3'>Publications  and<br/>
        Presentations</p>
      </div>
         </div>
    </div>


{/* Social media Icons */}
<div className='mt-20'>
<div className=' w-2/5 flex items-center justify-between gap-y-4'>
    <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full spaces-x-4 transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/> </a></Link>
    <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={33} height={33} alt="Linkedin"/></a></Link>
    <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={googleSchoolar} width={33} height={33} alt="Linkedin"/></a></Link>
  
   </div>
</div>

    </div>
  </div> 
  <div className='hero-image' >
         <div className='hero-absolute absolute'>

         </div>
  </div>

</div>
  
</main>
  )
}

export default Hero
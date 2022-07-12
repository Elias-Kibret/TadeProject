
import Image from 'next/image'
import heroImage from '../../public/Img/TadeRemoved.png'
const Hero = () => {
  return (
<main className="bg-[#000000] h-[650px] w-full mt-16 "  >
<div className='xl:pl-24 lg:pl-12 flex items-center justify-between '>
  <div className='w-2/5'>
    <div className='font-[Poppins] text-5xl font-extrabold pt-20'>
      <div className='inline-block title'>
        <h1 className='text-[#FFFFFF] py-5 title
         '>Tadesse  </h1> 
        <h1 className='text-[#2Ecc71]'>G.Wakjira, PHD</h1>
      </div>
    
    <p className=' text-sm font-light mt-10  text-gray-300 '>
    I'm a dedicated scholar and researcher. 
    My work has been recognized on numerous occasions. 
    Some of the recognitions include the Emir (Prince) Gold Medal

    </p>
    <div className='text-gray-100 my-10 flex justify-between' >
      <div className='flex items-center mr-10'>
        
       <div id='triangle-right'  >
          <p className='text-sm -ml-16'>14+</p>
       </div>
       <div>
       <p className='text-sm text ml-3'>Awards  </p>
       </div>
      </div>
      <div className='flex items-center'>

       <div id='triangle-right'  >
          <p className='text-sm text-gray-100 -ml-16'>30+</p> 
       </div>
       <p className='text-sm ml-3'>Publications  and Presentations</p>
      </div>
    </div>

    <button className='text-[#FFFFFF] flex bg-[#1C3B8B] text-sm py-3 px-6 rounded-xl my-10'>
      Learn More 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>

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
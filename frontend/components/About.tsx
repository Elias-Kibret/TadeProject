import Image from 'next/image'
import profileImage from '../public/Img/Tade.png'
import Link from 'next/link'
import linkedin from '../public/Img/Linkedin.svg'
import googleSchoolar from '../public/Img/googleScholara.svg'
import researchGate from '../public/Img/ResearchGate.svg'
import orcid from '../public/Img/orcid.svg'



const About = () => {
  return (
    <section className=' bg-gray-100 flex justify-between items-start z-0 py-16 px-16 mx-auto shadow-3xl'>
        <div className=' hero-image -mt-10 ' >
      
        

        </div>
        <div className='w-3/5 bg-teal-50 p-14 mt-20 border-4 border-gray-200 rounded-lg shadow-2xl leading-loose'>
           <p className=''>
           I'm a dedicated scholar and researcher. My work has been recognized on numerous occasions. Some of the recognitions include the<Link href="https://en.wikipedia.org/wiki/Tamim_bin_Hamad_Al_Thani"><a className='text-blue-900'> Emir (Prince)</a></Link><b>       Gold Medal for Academic and Research Excellence, Dissertation Award,</b>  
     and the <b>Graduate Research Award in Sciences</b> in recognition of the <b>research quality, significance, and presentation.</b> I was also honored as a <b>First Place Distinguished Graduate </b>of Class 2022.<Link href=""><a className='text-blue'><i>[Learn more]</i></a></Link> 
     </p>
     <p className='mt-8'>
Currently, I am serving as an Editorial Board Member for<Link href="https://www.frontiersin.org/journals/built-environment/sections/computational-methods-in-structural-engineering#editorial-board"><a className='text-blue-900'><i> Computational Methods in Structural Engineering</i></a></Link> 
, a section of the Journal of  <Link href="https://www.frontiersin.org/journals/built-environment"><a>Frontiers in Built Environment.</a></Link> 

  My research interests include rehabilitation and strengthening of concrete structures, performance-based design of structures, seismic fragility assessment and resilience of structures, structural optimization, machine learning and its application in engineering, and XAI.




I am passionate and excited to work with active research groups and individuals. I welcome any kind of research collaboration.
</p>
           <div className='grid grid-cols-3 items-center mt-14 gap-y-4'>
            <Link href="" ><a className='flex items-center hover-state'> <Image className="rounded-full spaces-x-4 transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={25} height={25} alt="Linkedin"/> <span className="px-2 text-blue-900">Linkedin</span>  </a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full ' src={googleSchoolar} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">GoogleScholar</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full  transform hover:scale-110 transition ease-out duration-400' src={researchGate} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearchGate</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">Amazon </span> </a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={googleSchoolar} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearcherID</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={researchGate} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearchGate</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={orcid} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">Kudos</span></a></Link>

           </div>
        </div>
    </section>
  )
}

export default About
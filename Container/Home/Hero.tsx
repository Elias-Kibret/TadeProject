import About from "./Hero/About"
import Button from "./Hero/Button"
import Marks from "./Hero/Marks"
import Title from "./Hero/Title"
import ImageHero from "./Hero/ImageHero"
import Socialmedia from "../../components/Icons/SocialMediaIcons"
const Hero = () => {
  return (
<main className="pb-16 w-full  "  >  
<div className='flex px-4 sm:pl-24 justify-between  mt-16'>
   {/* Desktop */}
   <div className="hidden lg:inline-flex">

   <div className='  w-4/5'>
         <Title/>
         <About/>
         <div className="hidden lg:block">
         <div className="flex justify-between flex-wrap text-gray-100 items-start mt-10">
          <Button/>
          <Marks/>

         </div>

         <Socialmedia/>
         </div>
         
         
   </div>
   <ImageHero/>
   </div>
 

  {/* Tablate */}



  {/* Mobile */}


  </div> 
  <div className="flex flex-col  sm:hidden">
  

  <div className="relative ">
    <div className="absolute top-28">
    <Marks/>
    </div>
  
  <ImageHero/>
  </div>
   
    
    <Title/>
    
    <div className="flex flex-col items-center">
    <About/>
      <Button/>
      <Socialmedia/>
    </div>
  </div> 
</main>
  )
}

export default Hero
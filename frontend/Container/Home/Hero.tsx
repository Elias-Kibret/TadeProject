import About from "./Hero/About"
import Button from "./Hero/Button"
import Marks from "./Hero/Marks"
import Title from "./Hero/Title"
import ImageHero from "./Hero/ImageHero"
import Socialmedia from "../../components/Icons/SocialMediaIcons"
const Hero = () => {
  return (
<main className="pb-16 w-full  "  >  
<div className='flex lg:ml-24  justify-between  mt-16'>
   {/* Desktop */}
   <div className="hidden lg:inline-flex">

   <div className='lg:w-[93%]'>
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
 





  


  </div>
  {/* Tablate */}
  <div className="hidden sm:block lg:hidden w-full">
    <div className="flex flex-row  justify-between w-[100%]">
      <div className="flex flex-col w-[30%] ml-10">
        <Title/>
      
      </div>
      <div className="w-[50%]">
      <ImageHero/>
      </div>
      
    </div>
    <div className="flex flex-col ml-10">
      <div className="flex justify-between items-center md:w-[80%] ">
        <div className="w-[70%] md:w-[65%] ">
        <About />
        </div>
      
        <Button/>
      </div>

<div className="flex">
<Marks/>
  <Socialmedia/>
</div>
      
    </div>
    </div> 
  {/* Mobile */}
  <div className="flex flex-col  sm:hidden">
  

  <div className="relative ">
    <div className="absolute top-10">
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
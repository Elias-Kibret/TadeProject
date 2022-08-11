import React,{useEffect,useState} from 'react'
import { client,urlFor } from '../../client'
import {FaMinus} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Slider from 'react-slick'
const List = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        cssEase: "linear", 
      }
const [researchInterest,setResearchInterest]=useState([]) 
    useEffect(()=>{
       const query='*[_type=="ResearchInterest"]'
       client.fetch(query).then((data)=>{
        setResearchInterest(data)
       })
    },[])

    console.log(researchInterest)
  return (
    <div  className='px-8 md:px-24 text-white'>
        <div className='my-32'>

            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' /> Research Interset</h2>    
        </div>  
        <div className='mt-14'>


        <div className='flex flex-wrap justify-center'>
      
      {
        researchInterest.map((item,index)=>{
       
          return(
            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{
              duration: 0.25,
              delay: 0.5
            }}
            className=' bg-[#141B17] hover-state overflow-hidden mx-4 mb-10 rounded-xl xs:w-[300px] md:w-[350px] h-[25.5rem]' key={item+index}>
            <div className=''>


<Slider {...settings} className=" overflow-hidden object-cover">
{researchInterest[index].imagesGallery?.map((images,index)=>{

return(

<div key={images.asset?._ref} className='object-cover h-[15rem] '>
<img 
  src={urlFor(images.asset?._ref)} width='450px' height='250px' 
  className="object-cover overflow-hidden "/>

</div> 
)})
}
</Slider>
</div>

            <div className='mx-4 px-2 lg:px-4 h-[11rem]'>
            <span className='block my-4 text-[#2ECC71]'>{item.Title}</span>
            <p className='mt-4  text-[#FFFFFF] leading-6 text-justify font-light text-sm'>
  
       {/* {item.description.substring(0,200)}
       {item.description.length>200&&(<span className='font-bold ml-2'>   . . .</span>)} */}
              </p>
            </div>



          </motion.div>  
          )
        })
      }

</div>
        </div>
        
    </div>
  )
}

export default List
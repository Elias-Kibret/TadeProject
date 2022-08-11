import React,{useEffect,useState} from 'react'
import { client,urlFor } from '../../client'
import {FaMinus} from 'react-icons/fa'

import { motion } from 'framer-motion'


const AreaOfContribution = () => {
    const [areaOfContribution,setAreaOfContribution]=useState([]) 
    useEffect(()=>{
       const query='*[_type=="AreaOfContributions"]'
       client.fetch(query).then((data)=>{
        setAreaOfContribution(data)
       })
    },[])
    
  return (
    <div  className='px-8 md:px-5 text-white overflow-hidden'>
    <div className='my-32'>

        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Possible contributions </h2>    
    </div>  
    <div className='mt-14 overflow-hidden'>


    <div className='flex flex-wrap justify-center'>
  
  {
    areaOfContribution.map((item,index)=>{
   
      return(
        <motion.div 
        
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          duration: 0.25,
          delay: 0.5
        }}
        className=' bg-[#141B17] mx-5 mb-10 overflow-hidden rounded-xl xs:w-[300px] md:w-[330px] h-[25.5rem]' key={item+index}>
        <div className=''>




<div key={item?.images.asset?._ref} className='object-cover h-[15rem] '>
<img 
src={urlFor(item?.images.asset?._ref)}  
className="object-cover overflow-hidden md:w-[350px] h-[200px]"/>

</div> 
</div>

        <div className='mx-4 px-5 lg:px-4 '>
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

export default AreaOfContribution
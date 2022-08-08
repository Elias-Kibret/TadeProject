import React,{useEffect,useState} from 'react'
import { client,urlFor } from '../../client'
import {FaMinus} from 'react-icons/fa'
import Cols from '../WhatsNew/News/Cols'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
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
const [organizer,setOrganizer]=useState([]) 
    useEffect(()=>{
       const query='*[_type=="Organizers"]'
       client.fetch(query).then((data)=>{
        setOrganizer(data)
       })
    },[])

    console.log(organizer, 'elias')
  return (
    <div  className='px-8 md:pz-12 text-white'>
        <div className='my-32'>

            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Organizers</h2>    
        </div>  
        <div className='mt-14'>


        <div className='sm:grid-cols-2  lg:grid-cols-3 place-items-center over gap-x-16 gap-y-10  overflow-hidden  grid grid-cols-1'>
      
      {
        organizer.map((item,index)=>{
       
          return(
            <div className='  overflow-hidden overflow-hidden rounded-xl ' key={item+index}>
            <div className=''>




<motion.div key={item.images.asset?._ref} className='object-cover  rounded-full flex items-center justify-center'
     initial={{scale:.5}}
     animate={{scale:1}}
     transition={{delay:.5, stiffness:100}}
>
<img 
  src={urlFor(item?.images.asset?._ref)}   
  className="object-cover overflow-hidden rounded-full border-2 border-gray-500 w-[180px] h-[170px] md:w-[250px] md:h-[250px]"/>

</motion.div> 


</div>

            <div className='mx-4 px-10 lg:px-4  '>
            <span className='block my-4 text-[#2ECC71] text-xl'>{item.Name}</span>
            <p className='mt-4  text-[#FFFFFF] leading-6 text-justify font-light text-sm'>
  
       {/* {item.description.substring(0,200)}
       {item.description.length>200&&(<span className='font-bold ml-2'>   . . .</span>)} */}
              </p>
            </div>



          </div>  
          )
        })
      }

</div>
        </div>
        
    </div>
  )
}

export default List
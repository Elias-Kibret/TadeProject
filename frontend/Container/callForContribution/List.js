import React,{useEffect,useState} from 'react'
import { client,urlFor } from '../../client'
import {FaMinus} from 'react-icons/fa'
import Cols from '../WhatsNew/News/Cols'
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
const [organizer,setOrganizer]=useState([]) 
    useEffect(()=>{
       const query='*[_type=="Organizers"]'
       client.fetch(query).then((data)=>{
        setOrganizer(data)
       })
    },[])

    console.log(organizer)
  return (
    <div  className='px-8 md:px-24 text-white'>
        {/* <div className='my-32'>

            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Organizers</h2>    
        </div>  
        <div className='mt-14'>


        <div className='sm:grid-cols-2  lg:grid-cols-3 place-items-center over gap-x-16 gap-y-10  overflow-hidden  grid grid-cols-1'>
      
      {
        researchInterest.map((item,index)=>{
       
          return(
            <div className=' bg-[#141B17] hover-state overflow-hidden overflow-hidden rounded-xl xs:w-[300px] md:w-[350px] h-[25.5rem]' key={item+index}>
            <div className=''>



{researchInterest[index].imagesGallery?.map((images,index)=>{

return(

<div key={images.asset?._ref} className='object-cover h-[15rem] '>
<img 
  src={urlFor(images.asset?._ref)} width='450px' height='250px' 
  className="object-cover overflow-hidden "/>

</div> 
)})
}

</div>

            <div className='mx-4 px-10 lg:px-4 h-[11rem]'>
            <span className='block my-4 text-[#2ECC71]'>{item.Name}</span>
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
        </div> */}
        
    </div>
  )
}

export default List
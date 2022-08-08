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
    const [researchInterest,setResearchInterest]=useState([]) 
    useEffect(()=>{
       const query='*[_type=="Awards"]'
       client.fetch(query).then((data)=>{
        setResearchInterest(data)
       })
    },[])
  return (
    <div  className='px-8 md:px-24 text-white'>
           <div className='my-32'>

            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' /> Research Interset</h2>    
        </div>  
        <div className='mt-14'>


        <div className='sm:grid-cols-2  lg:grid-cols-3 place-items-center over gap-x-16 gap-y-10  overflow-hidden  grid grid-cols-1'>
      
      {
        researchInterest.map((item,index)=>{

          return(
            <div className=' bg-[#141B17] overflow-hidden rounded-xl xs:w-[300px] md:w-[350px] h-[31.5rem]' key={item+index}>
            <div className=''>


<Slider {...settings} className=" overflow-hidden object-cover">
{researchInterest[index].imagesGallery?.map((images,index)=>{ 
//  console.log(images.asset)
console.log(item.decription.length)
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

            <div className='mx-4 px-10 lg:px-4 h-[11rem]'>
            <span className='block my-4 text-[#2ECC71]'>{item.Title}</span>
            <p className='mt-4  text-[#FFFFFF] leading-6 text-justify font-light text-sm'>
  
       {item.decription.substring(0,200)}
       {item.decription.length>200&&(<span className='font-bold ml-2'>   . . .</span>)}
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
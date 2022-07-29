import React,{useEffect,useState} from 'react'
import Slider from "react-slick";
import { client,urlFor } from '../../client';
import Image from 'next/image'
const Awards = (props) => {

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        cssEase: "linear",
   
    
      }
      // console.log(props.data)

  return (
    <div className='m xs:grid-cols-1 lg:grid-cols-2 overflow-hidden place-items-center over gap-x-16 gap-y-20 t-24  grid grid-cols-1' >
      
    {
      props.data?.map((item,index)=>{
        console.log(props.data[index])
        return(
          <div className=' bg-[#141B17]  rounded-xl w-[500px] pb-12 overflow-hidden' key={item+index}>
            <div className=' h-[350px] overflow-hiiden object-cover'>
              <Slider {...settings} className="overflow-hidden ">
              {
                  props.data[index].imagesGallery?.map((img,index)=>{
                    
                    return(
                      
                        <img src={urlFor(img.asset._ref).url()} className=" w-full h-[350px] object-cover  overflow-hidden" />
                      
                      
                    )
                  })
                }
              </Slider>
            
          

            </div>

          <div className='mx-4 mt-6 h-[200px] px-4'>
          
          <h2 className='text-xl h-[3rem] text-gray-200 font-semibold'>{item.Title}</h2>
          <p className='my-5 text-sm text-[#FFFFFF] leading-6 text-justify font-light'>
              
     {item.decription}
            </p>
            <span className='block my-4 text-[#2ECC71]'>{item.date}</span>
          </div>
        </div>  
        )
      })
    }
              
    
</div>
  )
}

export default Awards
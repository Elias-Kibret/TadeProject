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
    <div className='m xs:grid-cols-2 lg:grid-cols-3 overflow-hidden place-items-center over gap-x-16 gap-y-10 t-24 h-[600px]  grid grid-cols-1' >
      
    {
      props.data?.map((item,index)=>{
        console.log(props.data[index])
        return(
          <div className=' bg-[#141B17]  rounded-xl w-[350px] pb-12 overflow-hidden' key={item+index}>
            <div className='w-[350px] overflow-hiiden objectfit-contain'>
              <Slider {...settings} className="overflow-hidden object-cover">
              {
                  props.data[index].imagesGallery.map((img,index)=>{
                    console.log(img)
                    return(
                      
                        <img src={urlFor(img.asset._ref).url()} className=" w-full h-[250px] object-cover overflow-hidden" />
                      
                      
                    )
                  })
                }
              </Slider>
            
          

            </div>

          <div className='mx-4 h-[250px] px-4'>
          <span className='block my-4 text-[#2ECC71]'>{item.date}</span>
          <p className='my-10  text-[#FFFFFF] leading-6 text-justify font-light'>
              
     {item.decription}
            </p>
          </div>
        </div>  
        )
      })
    }
              
    
</div>
  )
}

export default Awards
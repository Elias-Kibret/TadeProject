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
      

  return (
    <div className='xs:grid-cols-2 lg:grid-cols-3 place-items-center over gap-x-12 gap-y-10  overflow-hidden  grid grid-cols-1'>
      
    {
      props.data?.map((item,index)=>{
      
        return(
          <div className=' bg-[#141B17]  rounded-xl w-[350px] pb-12 overflow-hidden' key={item+index}>
            <div className=' h-[17rem] overflow-hiiden object-cover'>
              <Slider {...settings} className=" overflow-hidden object-cover">
              {
                  props.data[index].imagesGallery?.map((img,index)=>{
                    
                    return(
                      
                      
                      
                        <div key={img.asset?._ref} className='object-cover h-[16rem]'>
                          {
                            
                             img.asset?._ref&&(<img 
                              src={urlFor(img.asset._ref).url()}  
                              className="object-cover overflow-hidden "/>)
                          }
                        
  
                      </div>
                      
                    )
                  })
                }
              </Slider>
            
          

            </div>

          <div className='mx-10 lg:mx-4  px-4 h-[17rem]'>
          
          <h2 className='text-xl text-gray-200 font-semibold'>{item.Title}</h2>
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
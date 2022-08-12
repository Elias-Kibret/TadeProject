import React,{useState,useEffect} from 'react'
import {urlFor,client} from '../../../client'
import Slider from "react-slick"
import {motion} from 'framer-motion'
const Rows = (props) => {
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
    <div >
          {
            props?.data.map((item,index)=>{
             
              return(
                <motion.div 
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{
                  duration: 0.25,
                  delay: 0.5
                }}
                key={index} className=" my-10 lg:my-20 flex flex-row w-[90%]
                 xs:w-[80%] sm:w-[60%] lg:w-[100%] md:w-[60%] mx-auto
                              flex-wrap-reverse justify-between
                              items-center
                                bg-[#141B17] py-10
                                 md:py-8 px-6 md:px-20   rounded-xl 
                                 
                                 ">
                <div className=' flex flex-col  w-[100%] lg:w-[50%] justify-center'>
                   <h3 className='p text-[#2ECC71] mb-4 '>{item.date}</h3>
                   {
                    item.Title&&(<h3 className='p text-gray-300  text-xl md:text-2xl  mb-4'>{item.Title}</h3>)
                   }
                   
                   <p className="text-gray-300 leading-8 text-justify font-light text-sm">{item.decription}</p>
                </div>
                <div className='lg:w-[30%] w-[100%] h-[250px] flex  object-cover justify-center'>

               
                <Slider {...settings} className="rounded-xl overflow-hidden object-cover flex justify-center items-center w-[100%] ml-5 mx-auto">
             {
              item?.imagesGallery.map((images,index)=>{
                return(
                <div key={images.asset._ref} className=' '>
                  <img 
                      src={urlFor(images.asset._ref)} 
                      className="object-cover overflow-hidden rounded-xl h-[200px] xs:h-[250px] sm:h-[200px]"/>
  
                </div>
              )})
             }
</Slider>
      </div>
      
      </motion.div>
              )


          })
          }
        

    </div>
  )
}

export default Rows
import React,{useState,useEffect} from 'react'
import {urlFor,client} from '../../../client'
import Slider from "react-slick"

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
                <div key={index} className="lg:my-20 flex flex-row flex-wrap-reverse justify-between  bg-[#141B17] py-10 md:py-8 px-6 md:px-20 mx-auto  rounded-xl ">
                <div className=' flex flex-col w-[50%] justify-center'>
                   <h3 className='p text-[#2ECC71] mb-4 '>{item.date}</h3>
                   {
                    item.Title&&(<h3 className='p text-gray-300 text-2xl  mb-4'>{item.Title}</h3>)
                   }
                   
                   <p className="text-gray-300 leading-8 text-justify font-light text-sm">{item.decription}</p>
                </div>
                <div className='w-[30%]'>

               
                <Slider {...settings} className="rounded-xl overflow-hidden ">
             {
              item?.imagesGallery.map((images,index)=>{
                console.log(images)
                return(
                <div key={images.asset._ref} className='w-[100px] object-contain'>
                  <img 
                      src={urlFor(images.asset._ref)} width='450px' height='300px' 
                      className="object-cover overflow-hidden rounded-xl"/>
  
                </div>
              )})
             }
</Slider>
      </div>
      </div>
              )


          })
          }
        

    </div>
  )
}

export default Rows
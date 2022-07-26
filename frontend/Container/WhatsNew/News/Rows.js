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
        

  const [news,setNew]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="news"]'
     client.fetch(query).then((data)=>{
      setNew(data)
     })
  },[])
  
  return (
    <div >
          {
            props.data?.map((news,index)=>{
             
              return(
                <div key={index} className="lg:my-32 flex flex-row flex-wrap-reverse justify-between  bg-[#141B17] py-10 md:py-8 px-6 md:px-20 mx-auto  rounded-xl ">
                <div className=' flex flex-col w-[50%] justify-center'>
                   <h3 className='p text-[#2ECC71] mb-8'>{props.data[index].date}</h3>
                   <p className="text-gray-300 leading-8 text-justify font-light ">{props.data[index].decription}</p>
                </div>
                <div className='w-[30%]'>

               
                <Slider {...settings} className="rounded-xl overflow-hidden ">
             {
              props.data[index].imagesGallery.map((images,index)=>{
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
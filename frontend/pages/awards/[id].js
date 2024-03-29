import React,{useState,useEffect} from 'react'
import {urlFor,client} from '../../client'
import Slider from "react-slick"
import { useRouter } from 'next/router'
import {HiOutlineX} from 'react-icons/hi'
const Details = (props) => {

    const [news,setNew]=useState([]) 
    const router = useRouter()
    const { id } = router.query
      useEffect(()=>{
         const query='*[_type=="Awards"]'
         client.fetch(query).then((data)=>{
          setNew(data.filter((items,index)=>{
            return items._id===id
          }))
         })
    
      },[])
     


    
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
    <div className='relative mt-44'>
     <button className='absolute right-6 md:right-20 -top-20 text-[#2cce71]' onClick={() => router.back()}>
      <HiOutlineX  size={36}/>
    </button>
    {
     
      news.map((item,index)=>{
     
        return(
          <div key={index} className=" my-20 lg:my-20 flex flex-row flex-wrap-reverse justify-between w-[90%] mx-auto bg-[#141B17] py-10 md:py-8 px-6 md:px-20   rounded-xl ">
            
          <div className=' flex flex-col  w-[100%] lg:w-[50%] justify-center'>
             <h3 className='p text-[#2ECC71] mb-4 '>{item.date}</h3>
             {
              item.Title&&(<h3 className='p text-gray-300 text-2xl  mb-4'>{item.Title}</h3>)
             }
           
             <p className="text-gray-300 leading-8 text-justify font-light text-sm">{item.decription}</p>
          </div>
          <div className='lg:w-[30%] w-[100%] h-[250px]'>

       
          <Slider {...settings} className="rounded-xl overflow-hidden object-cover">
       {
        item?.imagesGallery?.map((images,index)=>{
          return(
          <div key={images.asset._ref} className='w-[100px] object-cover h-[200px]'>
            <img 
                src={urlFor(images.asset._ref)} width='450px' height='200px' 
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

export default Details
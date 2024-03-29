import React,{useEffect,useState} from 'react'
import Slider from "react-slick";
import { useRouter } from 'next/router'
import { client,urlFor } from '../../client';
import Image from 'next/image'
import  {motion} from 'framer-motion'
import Link from 'next/link';
const Awards = (props) => {

  const router = useRouter()
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
    <div className='flex flex-wrap justify-center'>
      
    {
      props.data?.map((item,index)=>{
      console.log(item)
        return(
          <motion.div 
          initial={{opacity:0,scale:0.5}}
          whileInView={{opacity:1,scale:1}}
          transition={{
            duration: 0.25,
            delay: 0.5
          }}
          whileHover={{
            
            transition: { duration: 0.3},
          }}
          className=' bg-[#141B17]  rounded-xl w-[300px] lg:w-[350px] mb-10 mx-2 sm:mx-8 w  overflow-hidden   ' key={item+index}>
            <div className=' h-[14rem] sm:h-[18rem] overflow-hiiden object-cover'>
              <Slider {...settings} className=" overflow-hidden object-cover">
              {
                  props.data[index].imagesGallery?.map((img,index)=>{
                    
                    return(
                      
                      
                      
                        <div key={img.asset?._ref} className='object-cover h-[16rem]'>
                          {
                            
                             img.asset?._ref&&(<img 
                              src={urlFor(img.asset._ref).url()}  
                              className="object-cover overflow-hidden h-["/>)
                          }
                        
  
                      </div>
                      
                    )
                  })
                }
              </Slider>
            
          

            </div>

          <div className='mt-10 sm:mt-0 px-2 lg:px-6 h-[15rem]'>
          
          <h2 className=' md:text-xl text-gray-200 font-semibold '>{item.Title}</h2>
          <p className='my-5 text-sm text-[#FFFFFF] leading-6 text-justify font-light h-[6.6rem]'>
              
     {item.decription.substring(0,150) }
     {item.decription.length>150&&(<span className='font-bold ml-2'>   . . .</span>)}
     <div>

     {
      item.Link?.map((link,index)=>(
      <Link href={link}>
      <a className='text-blue-500 underline'>{item.LinkTitle[index]}</a>
      </Link>
      ))
      
     }
     </div>
     
            </p>
            <span className='block my-2 text-[#2ECC71] '>{item.date}</span>
          </div>
          {
            (router.pathname==='/awards'&&(item.decription.length>150))&&(
              <button className='my-4 px-5 bg-[#2cce71] w-[150px] ml-10 rounded-lg mt-8'>
              <Link href={'/awards/'+item._id} ><a className="text-[black]  my-4 px-4">See more</a></Link>
              </button>
            )
          }
        </motion.div>  
        )
      })
    }
              
    
</div>
  )
}

export default Awards
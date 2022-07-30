import Image from 'next/image'
import Slider from "react-slick"
import { urlFor } from '../../../client'
const Cols = (props) => {
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
    <div className='m xs:grid-cols-2 lg:grid-cols-3 place-items-center over gap-x-16 gap-y-10t-24 h-[600px]  grid grid-cols-1'>
      
          {
            props.data?.map((item,index)=>{
              return(
                <div className=' bg-[#141B17] overflow-hidden rounded-xl ' key={item+index}>
                  <div className='overflow-hidden w-full object-cover'>
                  <Slider {...settings} className="rounded-xl overflow-hidden ">
                                 {
                                 console.log(item.imagesGallery)
                                 /* {
                                  item?.imagesGallery?.map((images,index)=>{
                                    return(
                                    <div key={images.asset._ref} className='w-[100px] object-contain'>
                                      <img 
                                          src={urlFor(images.asset._ref)} width='450px' height='300px' 
                                          className="object-cover overflow-hidden rounded-xl"/>
  
                                    </div>
                                  )})
                                 } */}
                    </Slider>
                  </div>

                <div className='mx-4 h-[200px]'>
                <span className='block my-4 text-[#2ECC71]'>{item.date}</span>
                <p className='my-10  text-[#FFFFFF] leading-6 text-justify font-light text-sm'>
                  
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

export default Cols
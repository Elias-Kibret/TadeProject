import React from 'react'
import Image from 'next/image'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    cssEase: "linear",
   
    
  }
const List = () => {
  return (
    <div className='mx-24 w-4/5 mx-auto'>
    <div>
    <h2 className="text-[#A9A9A9] text-xl "><span className=" text-[#A9A9A9]   ">__</span>Awards</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Selected Awards and Recognitions</h2>    
    </div> 
    <div className='mt-24 grid grid-cols-3 gap-x-16'>
        <div className=' bg-[#141B17] overflow-hidden rounded-xl'>

        <Slider {...settings}>
        <Image src={award3}   />
        <Image src={award1}  />
        <Image src={award1}  />
        <Image src={award1}  />
        </Slider>



              
          <div className='mx-4'>
          <span className='block my-4 text-[#2ECC71]'>May 2022</span>
          <p className='my-10  text-[#FFFFFF]'>
                  
              My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
            </p>
          </div>
              

        </div>
        <div className='rounded-xl  bg-[#141B17] overflow-hidden  '>
            <Image src={award3}   />
            <div className='mx-4'>
            <span className='block my-4 text-[#2ECC71]'>May 2022</span>
          <p className='my-10  text-[#FFFFFF]'>
                  
              My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
            </p>
          </div>
        </div>
        <div className='rounded-xl  bg-[#141B17] overflow-hidden '>
        <Image src={award4}   />
        <div className='mx-4'>
        <span className='block my-4 text-[#2ECC71]'>May 2022</span>
          <p className='my-10  text-[#FFFFFF]' >
                
              My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
            </p>
          </div>
        </div>
    </div>
    <div className='flex justify-center items-center my-28  '>
    <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More News</button>
    </div>
</div>
  )
}

export default List
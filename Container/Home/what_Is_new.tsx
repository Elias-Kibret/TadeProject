import Image from 'next/image'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import Slider from "react-slick"
import {FaMinus} from 'react-icons/fa'
const what_Is_new = () => {
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
    <div className=" px-5 md:p-20">
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> News</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-extrabold">What's New</h2>
        <div className="  my-20 lg:my-32  flex flex-wrap-reverse justify-between items-center bg-[#141B17] py-10 md:py-8 px-6 md:px-10  rounded-xl ">
             <div className='md:w-[50%] flex flex-col  justify-center'>
                <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
                <p className="text-gray-100 text-justify  ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
                   the State of Qatar HH Sheikh Abdullah bin Hamad Al 
                   Thani for my academic (4.0 GPA) and exceptional 
                   research achievements. FIRST PLACE distinguished 
                   graduate of class 2022.</p>
             </div>
             <div className=' bg-[#141B17] overflow-hidden rounded-xl mb-8 md:mb-2 h-45 md:w-[35%]'>

<Slider {...settings} className="rounded-xl overflow-hidden ">
<Image src={award3} className="object-contain overflow-hidden rounded-xl"  />
<Image src={award1}  className="object-contain overflow-hidden rounded-xl" />
<Image src={award1}  className="object-contain overflow-hidden rounded-xl" />
<Image src={award1} className="object-contain overflow-hidden rounded-xl"  />
</Slider>

</div>
        </div>
        <div className='mt-24 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10'>
            <div className=' bg-[#141B17] overflow-hidden rounded-xl'>
              <Image src={award1} className=" object-cover overflow-hidden" />
              <div className='mx-4'>
              <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF] text-justify '>
                  
                  My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
                </p>
              </div>
              

            </div>
            <div className='rounded-xl  bg-[#141B17] overflow-hidden  '>
                <Image src={award3}   />
                <div className='mx-4'>
                <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF] text-justify'>
                  
                  My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
                </p>
              </div>
            </div>
            <div className='rounded-xl  bg-[#141B17] overflow-hidden '>
            <Image src={award4}   />
            <div className='mx-4'>
            <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF] text-justify' >
                
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

export default what_Is_new
import Image from 'next/image'

import award2 from '../../../public/Img/awards/award-2.png'
import award1 from '../../../public/Img/awards/award-1.png'
import award3 from '../../../public/Img/awards/award-3.png'
import award4 from '../../../public/Img/awards/award-4.png'
import Slider from "react-slick"
const Rows = () => {
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
        <div className="lg:my-32  flex flex-wrap-reverse justify-between items-center bg-[#141B17] py-10 md:py-8 px-6 md:px-20 mx-auto  rounded-xl ">
                     <div className='md:w-[50%] flex flex-col  justify-center'>
                        <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
                        <p className="text-gray-100 text-justify  ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
                           the State of Qatar HH Sheikh Abdullah bin Hamad Al 
                           Thani for my academic (4.0 GPA) and exceptional 
                           research achievements. FIRST PLACE distinguished 
                           graduate of class 2022.</p>
                     </div>
                     <div className=' bg-[#141B17] overflow-hidden rounded-xl mb-8 md:mb-2  md:w-[35%]'>

        <Slider {...settings} className="rounded-xl overflow-hidden ">
        <Image src={award3} className="object-contain overflow-hidden rounded-xl"  />
        <Image src={award1}  className="object-contain overflow-hidden rounded-xl" />
        <Image src={award1}  className="object-contain overflow-hidden rounded-xl" />
        <Image src={award1} className="object-contain overflow-hidden rounded-xl"  />
        </Slider>

        </div>
                </div>
    </div>
  )
}

export default Rows
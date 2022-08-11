import Image from 'next/image'
import { urlFor } from '../../../client'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import Link from 'next/link'
import Button from '../../Home/Hero/Button'
const Cols = (props) => {
  const router = useRouter()
  console.log(router.pathname)
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
              
              return(
                <div className=' bg-[#141B17] overflow-hidden rounded-xl mb-10 mx-5 xs:w-[300px] md:w-[350px] h-[31.5rem]' key={item+index}>
                <div className=''>

               
<Slider {...settings} className=" overflow-hidden object-cover">
{props.data[index]?.imagesGallery?.map((images,index)=>{ 
//  console.log(images.asset)
console.log(item.decription.length)
return(

 <div key={images.asset?._ref} className='object-cover h-[15rem] '>
  <img 
      src={urlFor(images.asset?._ref)} width='450px' height='250px' 
      className="object-cover overflow-hidden "/>

</div> 
)})
}
</Slider>
</div>

                <div className='mx-4 px-10 lg:px-4 h-[11rem]'>
                <span className='block my-4 text-[#2ECC71]'>{item.date}</span>
                <p className='mt-4  text-[#FFFFFF] leading-6 text-justify font-light text-sm'>
                  
           {item.decription.substring(0,200)}
           {item.decription.length>200&&(<span className='font-bold ml-2'>   . . .</span>)}
                  </p>
                </div>
                {
                  (router.pathname==='/whatsnew'&&(item.decription.length>150))&&(
                    <div className='my-4 px-5'>
                    <Link href={'/whatsnew/'+item._id} ><a className="text-[blue] my-4 px-4">See more</a></Link>
                    </div>
                  )
                }
                
              
              </div>  
              )
            })
          }

          
                  
        
    </div>
  )
}

export default Cols
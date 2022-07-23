
import Image from 'next/image'
import { urlFor } from '../../../client'
const Cols = (props:any) => {
  // console.log(props.data[0].imagesGallery.asset._ref)
  return (
    <div className='mt-24 h-[600px]  grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 place-items-center over gap-x-16 gap-y-10'>
      
          {
            props.data.map((item:any,index:any)=>{
              return(
                <div className=' bg-[#141B17] overflow-hidden rounded-xl'>
                  <div className='overflow-hidden w-full object-cover'>
                  <img src={urlFor(props.data[index].imagesGallery.asset._ref).url()} className=" w-full h-[250px] object-cover overflow-hidden" />
                  </div>

                <div className='mx-4 h-[250px]'>
                <span className='block my-4 text-[#2ECC71]'>{item.date}</span>
                <p className='my-10  text-[#FFFFFF] text-justify '>
                  
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
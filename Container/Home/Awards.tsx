import Image from 'next/image'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
const Awards = () => {
  return (
    <div className='px-24'>
        <div>
        <h2 className="text-[#A9A9A9] text-xl "><span className=" text-[#A9A9A9]   ">__</span> Contact</h2>
            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Contact Me</h2>    
        </div> 
        <div className='mt-24 grid grid-cols-3 gap-x-16'>
            <div className=' bg-[#201616] overflow-hidden rounded-xl'>
              <Image src={award1} className=" object-cover overflow-hidden" />
              <div className='mx-4'>
              <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF]'>
                  
                  My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
                </p>
              </div>
              

            </div>
            <div className='rounded-xl  bg-[#201616] overflow-hidden  '>
                <Image src={award3}   />
                <div className='mx-4'>
                <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF]'>
                  
                  My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
                </p>
              </div>
            </div>
            <div className='rounded-xl  bg-[#201616] overflow-hidden '>
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

export default Awards
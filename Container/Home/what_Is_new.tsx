import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import Image from 'next/image'
const what_Is_new = () => {
  return (
    <div className="p-20">
        <h2 className="text-[#A9A9A9] text-xl font-bold"><span className=" text-[#A9A9A9] ">__</span> News</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-extrabold">What's New</h2>
        <div className="my-32 flex justify-between bg-[#201616] py-12 px-10  rounded-xl ">
             <div className='w-[50%] flex flex-col justify-center'>
                <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
                <p className="text-gray-100 ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
                   the State of Qatar HH Sheikh Abdullah bin Hamad Al 
                   Thani for my academic (4.0 GPA) and exceptional 
                   research achievements. FIRST PLACE distinguished 
                   graduate of class 2022.</p>
             </div>
             <div className='w-[30%]'> 
                <Image src={award2} width={310} height={270} className='rounded-xl'/>
             </div>
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

export default what_Is_new
import React from 'react'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import Image from 'next/image'
const List = () => {
  return (
    <div className='px-24'>
        <div className="my-32 flex justify-between bg-[#141B17] py-12 px-10  rounded-xl ">
             <div className='w-[50%] flex flex-col justify-center'>
                <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
                <p className="text-gray-100 text-justify ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
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
            <div className=' bg-[#141B17] overflow-hidden rounded-xl'>
              <Image src={award1} className=" object-cover overflow-hidden" />
              <div className='mx-4'>
              <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF] text-justify'>
                  
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

        <div className="my-32 flex justify-between bg-[#141B17] py-12 px-10  rounded-xl ">
        <div className='w-[30%]'> 
                <Image src={award2} width={310} height={270} className='rounded-xl'/>
             </div>
             <div className='w-[50%] flex flex-col justify-center'>
                <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
                <p className="text-gray-100 text-justify  ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
                   the State of Qatar HH Sheikh Abdullah bin Hamad Al 
                   Thani for my academic (4.0 GPA) and exceptional 
                   research achievements. FIRST PLACE distinguished 
                   graduate of class 2022.</p>
             </div>
             
        </div>

        <div className='mt-24 grid grid-cols-3 gap-x-16'>
          <div className=' bg-[#141B17] overflow-hidden rounded-xl'>
            <Image src={award1} className=" object-cover overflow-hidden" />
            <div className='mx-4'>
            <span className='block my-4 text-[#2ECC71]'>May 2022</span>
            <p className='my-10  text-[#FFFFFF] text-justify'>
                  
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
      <div className="my-32 flex justify-between bg-[#141B17] py-12 px-10  rounded-xl ">
           <div className='w-[50%] flex flex-col justify-center'>
              <h3 className='bg-[A9A9A9] mb-10 text-[#2ECC71] text-xl'>May 2022</h3>
              <p className="text-gray-100 text-justify ">Awarded a Gold Medal by the Deputy Emir (Prince) of 
                 the State of Qatar HH Sheikh Abdullah bin Hamad Al 
                 Thani for my academic (4.0 GPA) and exceptional 
                 research achievements. FIRST PLACE distinguished 
                 graduate of class 2022.</p>
           </div>
           <div className='w-[30%]'> 
              <Image src={award2} width={310} height={270} className='rounded-xl'/>
           </div>
      </div>

    </div>
  )
}

export default List
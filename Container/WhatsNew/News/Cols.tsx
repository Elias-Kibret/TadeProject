
import Image from 'next/image'
import award2 from '../../../public/Img/awards/award-2.png'
import award1 from '../../../public/Img/awards/award-1.png'
import award3 from '../../../public/Img/awards/award-3.png'
import award4 from '../../../public/Img/awards/award-4.png'
const Cols = () => {
  return (
    <div>
        <div >
            <div className=' bg-[#141B17] overflow-hidden rounded-xl'>
              <Image src={award1} className=" object-cover overflow-hidden" />
              <div className='mx-4'>
              <span className='block my-4 text-[#2ECC71]'>May 2022</span>
              <p className='my-10  text-[#FFFFFF] text-justify '>
                  
                  My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.
                </p>
              </div>
            </div>        
        </div>
    </div>
  )
}

export default Cols
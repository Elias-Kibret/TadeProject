import Image from 'next/image'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import {FaMinus} from 'react-icons/fa'
import RowUI from '../WhatsNew/News/Rows'
import ColUI from '../WhatsNew/News/Cols'
const what_Is_new = () => {

  return (
    <div className=" px-6 md:mt-20 md:px-20">
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> News</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-extrabold">What's New</h2>
        <div className='mt-10 md:mt-16'>

          <RowUI/>
          <div className='mt-24 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 place-items-center  gap-x-16 gap-y-10'>
           <ColUI/>
           <ColUI/>
           <ColUI/>
          </div>
        </div>
        <div className='flex justify-center items-center my-28  '>
        <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More News</button>
        </div>

    </div>
  )
}

export default what_Is_new
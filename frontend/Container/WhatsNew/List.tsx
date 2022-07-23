import React from 'react'
import award2 from '../../public/Img/awards/award-2.png'
import award1 from '../../public/Img/awards/award-1.png'
import award3 from '../../public/Img/awards/award-3.png'
import award4 from '../../public/Img/awards/award-4.png'
import RowUI from '../WhatsNew/News/Rows'
import ColUI from '../WhatsNew/News/Cols'
import Image from 'next/image'
const List = () => {
  return (
    <div className=" md:mt-20 md:px-20" >
     <RowUI/>
     <div className='mt-24 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 place-items-center  gap-x-16 gap-y-10'>
       <ColUI/>
       <ColUI/>
       <ColUI/>
      </div>
    </div>
  )
}

export default List
import React from 'react'
import Link from 'next/link'
const List = () => {
  return (
<div className="flex mt-8  items-center justify-between px-10">
   <div><h3 className="text-[#FFFFFF] text-3xl  ">Publications and presentations</h3></div>
   <div className="flex items-center justify-evenly text-[#FFFFFF] ">
    <span className='text-[#2ECC71] ml-4'>Filter by type</span>
    <div className='px-4'>
    <button className="bg-[#2ecc71] px-6 ml-6 py-2  rounded-full">Peer-Reviewed Journal</button>
    </div>
    <button className="bg-[#2ecc71] px-6 py-2   rounded-full">2022</button>
   </div>
</div>
  )
}

export default List
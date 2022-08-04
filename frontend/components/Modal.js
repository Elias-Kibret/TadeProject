import React from 'react'

const Modal = (props) => {
    console.log(props.Abstract)
    console.log(props.Abstract_Title)
  return (
    <div className='fixed left-0 top-0  w-[100%] h-[100%] font-light bg-[black] mx-auto  px-16 md:px-32 text-justify  overflow-y-auto py-36'>
            <div className=' mx-auto px-4 py-6 bg-[#141B17] w-full  text-white md:w-[70%]'>
           {/* Header */}
           <div className='p'>
            <p>{props.Abstract_Title}</p>
           </div>
           <div className=''>
             <h3 className="text-2xl py-4">Abstract</h3>
             <p className=''>
               {props.Abstract}
             </p>
           </div>


            </div>
    </div>
  )
}

export default Modal
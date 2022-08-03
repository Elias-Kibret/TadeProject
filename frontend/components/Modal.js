import React from 'react'

const Modal = (props) => {
    console.log(props.Abstract)
  return (
    <div className='fixed left-0 top-0  w-[100%] h-[100%] bg-[black] mx-auto px-32 text-justify  overflow-y-auto py-36'>
            <div className=' mx-auto text-white w-[70%]'>
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
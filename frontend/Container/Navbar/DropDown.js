import React from 'react'
import Link from 'next/link'
const DropDown = () => {
  return (
    <div className='research w-[200px] bg-[black]  flex flex-col'>
        <Link href="/home" ><a className='link'>Publications</a></Link>
        
        <Link href=""><a className='link'>Selected Presentation</a></Link>
    </div>
  )
}

export default DropDown
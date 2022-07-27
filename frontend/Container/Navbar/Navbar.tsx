import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RiAwardFill} from 'react-icons/ri'
import {HiOutlineDocumentReport,HiNewspaper} from 'react-icons/hi'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {BiCaretDown} from 'react-icons/bi'
import DropDown from './DropDown'
import Link from 'next/link'

const icons=[AiOutlineHome,HiNewspaper,RiAwardFill]
const nav_List=["Home","WhatsNew", "Awards",]
const Navbar = () => {

  return (
    <>
    <div className=" flex items-center text-sm text-gray-100 ">
            {
                nav_List.map((item,index)=>
                {
                  const Icon=icons[index]

                    return (
                        <button key={item+index} className="flex items-center  cursor-pointer relative " >

                        <Link href={`${item==='Home'?'/':item.trim().toLowerCase()}`} className="cursor-pointer ">
                            <span className='px-6 flex items-center hover-state'>
                            <Icon/>
                            <a className="px-2 cursor-pointer">
                                      { item==='WhatsNew'?"What's New":item}</a>
                                      

                            </span>
                        </Link>
                    </button>   
                    )
                })
            }
            
      <div  className="flex items-center  cursor-pointer relative " >
        <DropDown/>

<Link href="/research" className="cursor-pointer ">
    <span className='px-6 flex items-center hover-state'>
     <HiOutlineDocumentReport/>
    <a className="px-2 cursor-pointer">

      Research
              </a>
            <BiCaretDown/>                

    </span>
</Link>
</div> 
    </div>
    </>
  )
}

export default Navbar
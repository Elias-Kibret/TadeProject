import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RiAwardFill} from 'react-icons/ri'
import {HiOutlineDocumentReport,HiNewspaper} from 'react-icons/hi'
import Link from 'next/link'

const icons=[AiOutlineHome,HiNewspaper,RiAwardFill,HiOutlineDocumentReport]
const nav_List=["Home","WhatsNew", "Awards","Research"]
const Navbar = () => {

  return (
    <>
    <div className=" flex items-center text-sm text-gray-100 ">
            {
                nav_List.map((item,index)=>
                {
                  const Icon=icons[index]

                    return (
                        <li key={item+index} className="flex items-center hover-state cursor-pointer ">
                        <Link href={`${item==='Home'?'/':item.trim().toLowerCase()}`} className="cursor-pointer">
                            <span className='px-6 flex items-center'>
                            <Icon/>
                            <a className="px-2 cursor-pointer">
                                      { item==='WhatsNew'?"What's New":item}</a>
                            </span>
                        </Link>
                    </li>   
                    )
                })
            }
    </div>
    </>
  )
}

export default Navbar
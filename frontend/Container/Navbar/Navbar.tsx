import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RiAwardFill} from 'react-icons/ri'
import {HiOutlineDocumentReport,HiNewspaper} from 'react-icons/hi'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {BiCaretDown} from 'react-icons/bi'
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
                        <button key={item+index} className="flex items-center  cursor-pointer relative">
                          {item==="Research"&&(<div className='research text-left'>
                                  <p className='text-left' >Publication</p>
                                  <p className='text-left'>Research</p>
                          </div>)}
                        <Link href={`${item==='Home'?'/':item.trim().toLowerCase()}`} className="cursor-pointer ">
                            <span className='px-6 flex items-center hover-state'>
                            <Icon/>
                            <a className="px-2 cursor-pointer">
                                      { item==='WhatsNew'?"What's New":item}</a>
                                      {
                                        item==="Research"&&(<BiCaretDown/>)
                                      }

                            </span>
                        </Link>
                    </button>   
                    )
                })
            }
    </div>
    </>
  )
}

export default Navbar
import React, { useState ,useContext} from 'react'
import { toggleContext } from '../../components/Header';
import {AiOutlineHome} from 'react-icons/ai'
import {RiAwardFill} from 'react-icons/ri'
import {HiOutlineDocumentReport,HiNewspaper} from 'react-icons/hi'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'
import {BiCaretDown} from 'react-icons/bi'
import Link from 'next/link'


const icons=[AiOutlineHome,BsPersonCircle,HiNewspaper,RiAwardFill]
const nav_List=["Home","About","WhatsNew", "Awards",]
const Navbar = () => {
const [display, setDisplay]=useState(false)
const [show, setShow]=useContext(toggleContext)
  return (
    <>
    <div className=" pt-4 pb-20 md:pt-0 md:pb-0 flex flex-col bg-[#000000] w-full  md:flex-row md:items-center items-start  text-sm text-gray-100 ">
            {
                nav_List.map((item,index)=>
                {
                  const Icon=icons[index]

                    return (
                        <button key={item+index} className="flex items-center flex-col md:flex-row cursor-pointer relative " onClick={()=>{setShow(!show)}}  >

                        <Link href={`${item==='Home'?'/':item.trim().toLowerCase()}`} className="cursor-pointer ">
                            <span className='px-4 lg:px-6 flex items-center hover-state'>
                            <Icon/>
                            <a className="px-1 lg:px-2 cursor-pointer hover:text-[#2cce71]">
                                      { item==='WhatsNew'?"What's New":item}</a>
                                      

                            </span>
                        </Link>
                    </button>   
                    )
                })
            }
            
      <div  className="flex items-center  cursor-pointer relative " 
      onMouseEnter={()=>{
        
        setDisplay(true)}}
      onMouseLeave={()=>{
      setDisplay(false)
      }}
      >
        {
          display&&(
            <div className='research w-[200px] pb-6 bg-[#2cce71]  flex flex-col'
            onMouseEnter={()=>{setDisplay(true)}}
            onMouseLeave={()=>{
            setDisplay(false)
            }}
            >
            <Link href="/researchInterest" ><span className='dropDown'onClick={()=>{setShow(!show)}}>Research Interest</span></Link>
            <Link href="/publications" ><span className='dropDown'onClick={()=>{setShow(!show)}}>Publications</span></Link>
            <Link href="/presentation"><a className='dropDown' onClick={()=>{setShow(!show)}}>Selected Presentation</a></Link>
            <Link href="/collaboration"><a className='dropDown' onClick={()=>{setShow(!show)}}>Call for Collabuation</a></Link>
        </div> 
          )
        }
      
<Link href="/research" className="cursor-pointer ">
    <span className='px-6 flex items-center hover-state'>
     <HiOutlineDocumentReport/>
    <a className="px-2 cursor-pointer hover:text-[#2cce71]">

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
import React, { useState ,useContext} from 'react'
import { toggleContext } from '../../components/Header';
import {AiOutlineHome} from 'react-icons/ai'
import {RiAwardFill} from 'react-icons/ri'
import {HiOutlineDocumentReport,HiNewspaper} from 'react-icons/hi'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'
import {BiCaretDown} from 'react-icons/bi'
import Link from 'next/link'
import Contact from '../Home/Contact'
import {HiOutlineX} from 'react-icons/hi'
import {RiContactsLine} from 'react-icons/ri'
const icons=[AiOutlineHome,BsPersonCircle,HiNewspaper,RiAwardFill]
const nav_List=["Home","About","WhatsNew", "Awards",]
const Navbar = () => {
const [display, setDisplay]=useState(false)
const [show, setShow]=useContext(toggleContext)
const [showContactForm ,setShowContactForm]=useState(false)
  return (
    <>
    <div className=" pt-4 pb-20 md:pt-0 md:pb-0 flex flex-col bg-[#000000] w-full h-[100vh] md:h-[8vh] md:flex-row md:items-center items-start  text-sm text-gray-100 ">
            {
                nav_List.map((item,index)=>
                {
                  const Icon=icons[index]

                    return (
                        <button key={item+index} className="flex items-center py-2 flex-col md:flex-row cursor-pointer relative " onClick={()=>{setShow(!show)}}  >

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
            <div className='research w-[200px] pb-6 bg-[#2cce71]  flex flex-col '
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


     <Link href="/research" className="cursor-pointer py-2">
            <span className='px-4 py-2  flex items-center hover-state'>
             <HiOutlineDocumentReport/>
            <a className="px-2 cursor-pointer hover:text-[#2cce71]">

              Research
                      </a>
                    <BiCaretDown/>                

            </span>
        </Link>
    

</div> 
<div className='z-[1]'>

<div  className=" text-[#FFFFFF] block md:hidden hover-state text-sm border-black  px-7 py-2  rounded-full hover:bg-[black]   hover: border  ">
      <Link href="/Contact">
            <span className='px-4 lg:px-6 flex items-center hover-state'>
            <RiContactsLine />
            <a className="px-1 lg:px-2 cursor-pointer hover:text-[#2cce71]">Contact
                      </a>
                                      

            </span>
          
        </Link>
             
                
      </div>
      {/* {
        showContactForm&&(<div className="absolute flex-1  bg-[black]  overflow-hidden md:hidden right-0 -top-4 left-0  pt-10 pb-60 -mx-10 text-gray-100 z-[30]">
          <button className="text-[#2eec71] font-semibold absolute right-10 " onClick={()=>{
          setShowContactForm(!showContactForm)

        }} ><HiOutlineX size={38}/></button>
        <Contact/>
      </div>)
      } */}
</div>
    </div>
    </>
  )
}

export default Navbar
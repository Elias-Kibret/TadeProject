import Head from "next/head"
import React from "react"
import Navbar from "../Container/Navbar/Navbar"
import Link from "next/link"
import Image from "next/image"
import {HiOutlineX,HiMenu} from 'react-icons/hi'

import {IoIosArrowDroprightCircle} from 'react-icons/io'
import Publications from "./Publications"
import { useState } from "react"


const Header = () => {
  const [show, setShow]=React.useState<boolean>(false);
  console.log(show)
  return (
<header className=" bg-[black] fixed w-full top-0 left-0  right-0 z-10 text-xl px-4 sm:px-10  py-3 sm:py-5 text-gray- font-poppins ">
   <div className="flex  justify-between  xl:pl-14  items-center relative">
      <div className="flex justify-between items-center  space-x-4 w-full lg:w-auto sm:px-0 md:hidden lg:block">
  
    <span className="text-gray-200  "><span className=" font-bold ">Tadesse </span>G. Wakjira</span>
    <div className='text-[#2Ecc71] md:hidden' onClick={()=>{setShow(!show)}}>
         {
          show?<HiOutlineX size={28}/>:<HiMenu size={36}/>
         }
    </div>
      </div>

      <div className={" mobile_nav "+ " md-flex "+ (show?"block":"hidden")}>  
         <Navbar/>
      </div>
      {/* mobile version nav */}
      <div className="md:hidden">
              
      </div>
        <div  className="bg-[#2ECC71] text-[#FFFFFF] hidden md:block hover-state text-sm border-black  px-7 py-2  rounded-full hover:bg-[black]  hover:text-[#2ECC71] hover: border hover:border-[#2ECC71] ">
        <Link href=""  >
              <a className="flex items-center"> Contact</a>
          </Link>
        </div>
    </div> 
</header>
  )
}

export default Header
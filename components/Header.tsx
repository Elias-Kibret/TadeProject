import Head from "next/head"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {HiMenu} from 'react-icons/hi'
import Publications from "./Publications"
import { useState } from "react"

const Header = () => {
  const [show, setShow]=React.useState<boolean>(false);
  console.log(show)
  return (
<header className=" fixed bg-black w-full top-0 left-0  right-0 z-10 text-xl px-4 sm:px-10 py-5 text-gray- font-poppins ">
   <div className="flex  lg:justify-center xl:justify-between xl:pl-14  items-center">
      <div className="flex items-center space-x-4">
  
    <span className="text-gray-200 hidden xl:block "><span className=" font-bold ">Tadesse </span>G. Wakjira</span>
      </div>
      <div className='sm:hidden'>
       <HiMenu/>
      </div>
      <div className="hidden sm:block">

    
      <div className="flex justify-between">
        <nav className="flex list-none items-center space-x-12   md:inline-flex text-sm text-[#A9A9A9]">
            <li className="">
                <Link href="/">
                    <a className="hover-state flex items-center space-x-2"><svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg> Home</a>
                </Link>
            </li>
            <li>
                <Link href="/" className="relative"  z-1 >
                    <div className="flex items-center " onMouseLeave={()=>setShow(false)} onMouseEnter={()=>{setShow(true)}}>

                    <a className="hover-state flex items-center"> 
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </span>

                    Publications <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg></span></a>
                    {
                      show &&<Publications />
                    }
                    

                    </div>

                </Link>
            </li>
            <li>
                <Link href="/whatIsNew">

                    <a className="hover-state flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                    What's New</a>
                </Link>
            </li>
            <li>
                <Link href="/awards">
                    <a className="hover-state flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                         Awards</a>
                </Link>
            </li>
            <li>
                <Link href="/researchs">
                    <a className="hover-state flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Research</a>
                </Link>
            </li>

              <li className="bg-[#2ECC71] text-[#FFFFFF] hover-state  border-black  px-7 py-2  rounded-full hover:bg-[black]  hover:text-[#2ECC71] hover: border hover:border-[#2ECC71]">
              <Link href=""  >
                    <a className="flex items-center"> Contact</a>
                </Link>
              </li>
  
          
        </nav>
  
      </div>

        </div>
    </div> 
</header>
  )
}

export default Header
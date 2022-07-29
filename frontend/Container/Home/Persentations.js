import React ,{useState,useEffect} from 'react'
import { client } from '../../client'
import Link from "next/link"
import Image from "next/image"
import Books from '../../public/Img/Books.jpg'
import {FaMinus} from 'react-icons/fa'
import Publications from "../../components/Publications"

const persentaions = () => {
  const [publications,setPublications]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="TopPublications"]'
     client.fetch(query).then((data)=>{
      setPublications(data)
     })
  },[])
  return (
    <div className=" px-8 md:px-24">
               <div>
                <div className="flex mt-8  items-center justify-between">
                   <div><h3 className="text-[#FFFFFF] text-3xl  ">Publications and presentations</h3></div>
                   {/* <div className="flex items-center justify-between text-[#FFFFFF] mr-14">
                    <button className="bg-[#2ecc71] px-4 py-2   rounded-lg">All</button>
                    <Link href="">
                        <a className="flex items-center mx-6">
                        Publications
                        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  =          </svg></span>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                        Presentations
                        </a>
                    </Link>
                   </div> */}
                </div>
                
               </div>

               <Publications data={publications}/>
               <div className='flex justify-center items-center my-28 hover-state '>
      <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >View All</button>
      </div>
    </div>
  )
}

export default persentaions
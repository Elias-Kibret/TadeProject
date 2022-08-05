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
    <div className="md:px-24">
               <div>
                <div className="flex mt-8  items-center justify-between">
                <div>
                  <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> Research</h2>
                      <h2 className="text-[#FFFFFF] text-2xl  mx-4 md:text-3xl mt-8  font-[poppins] font-bold">Publications and presentations</h2>    
                  </div>
              
                </div>
                
               </div>

               <Publications data={publications}/>
               <div className='flex justify-center items-center my-28 hover-state '>
                
      <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' ><Link href="/publications">View All</Link></button>
      </div>
    </div>
  )
}

export default persentaions
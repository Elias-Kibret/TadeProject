import React,{useState,useEffect} from 'react'
import {client} from '../../client'
import Link from 'next/link'
import Image from 'next/image'
import {FaMinus} from 'react-icons/fa'
import RowUI from '../WhatsNew/News/Rows'
import ColUI from '../WhatsNew/News/Cols'
const what_Is_new = () => {
  const [news,setNew]=useState([]) 
  const [TopNewsCol,  setTopNewsColumanFormat]=useState([])
  useEffect(()=>{
     const query='*[_type=="Tops_News_Row_Format"]'
     const Top_News_Col_query='*[_type=="Tops_News_Columan_Format"]'
     client.fetch(query).then((data)=>{
      setNew(data)
     })
     client.fetch(Top_News_Col_query).then((data)=>{
      setTopNewsColumanFormat(data)
     })
  },[])
  
 return (
    <div className=" px-6 md:mt-20 md:px-20">
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> News</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-extrabold">What's New</h2>
        <div className='mt-10 md:mt-16'>

          <RowUI data={news}/>
          
           <ColUI data={TopNewsCol}/>
           
          
        </div>
        <div className='flex justify-center items-center my-28  '>
          <Link href="/whatsnew">
          <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More</button>
          </Link>
        
        </div>

    </div>
  )
}

export default what_Is_new
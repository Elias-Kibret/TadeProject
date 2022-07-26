import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import {FaMinus} from 'react-icons/fa'
import Award from '../Awards/Awards'
const Awards = () => {
  const [awards,setAwards]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="SelectedAwards"]'
     client.fetch(query).then((data)=>{
      setAwards(data)
     })
  },[])
  return (
    <div className='px-14 md:px-24 mt-40'>
        <div>
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> Awards</h2>
            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Selected Awards and Recognitions</h2>    
        </div> 
        <div className='mt-20'>
          <Award data={awards}/>
        </div>
        <div className='flex justify-center items-center my-28 hover-state '>
        <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More News</button>
        </div>
    </div>
  )
}

export default Awards
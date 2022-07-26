import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Awards from './Awards'


const List = () => {

  const [awards,setAwards]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="SelectedAwards"]'
     client.fetch(query).then((data)=>{
      setAwards(data)
     })
  },[])
  return (
    <div className='mx-24  mx-auto'>
    <div>
    <h2 className="text-[#A9A9A9] text-xl "><span className=" text-[#A9A9A9]   ">__</span>Awards</h2>
        <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Selected Awards and Recognitions</h2>    
    </div> 
  
  <Awards data={awards}/>
  
       
       
  
    <div className='flex justify-center items-center my-28  '>
    <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More News</button>
    </div>
</div>
  )
}

export default List
import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Link from 'next/link'
import Publications from '../../components/Publications'
import Rows from '../WhatsNew/News/Rows'
const List = () => {
  const [selectedPublication,setSelectedPublications]=useState([]) 
  const [selectedPresentations,setSelectedPresentations]=useState([])
  useEffect(()=>{
     const publications='*[_type=="SelectedPublications"]'
     const presentations='*[_type=="SelectedPresentations"]'

     client.fetch(publications).then((data)=>{
      setSelectedPublications(data)
     })

     client.fetch(presentations).then((data)=>{
      setSelectedPresentations(data)
     })
  },[])
  

  return (
<div className="mt-12  items-center justify-between px-3">
   <div className='mt-10 '>
    <h3 className="text-[#FFFFFF] text-3xl  ">Selected Publications </h3>
   </div>
   <div>
   <Publications  data={selectedPublication} />
   <div className='flex justify-center items-center my-28  '>
      <Link href="/publications">
      <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More</button>
      </Link>
        
    </div>
   </div>
   
   <div>
   <div className='my-22'>
    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl ">Selected presentations</h3>
   </div>
   <Rows data={selectedPresentations}/>
   </div>
   <div className='flex justify-center items-center my-28  '>
    <Link href="/presentation">
    <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More</button>
    </Link>
        
  </div>

</div>
  )
}

export default List
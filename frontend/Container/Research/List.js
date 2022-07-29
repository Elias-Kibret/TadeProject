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
  // console.log(  selectedPublication)
  console.log(selectedPresentations)
  return (
<div className="mt-8  items-center justify-between px-10">
   <div className='mt-10 '>
    <h3 className="text-[#FFFFFF] text-3xl  ">Selected Publications </h3>
   </div>
   <div>
   <Publications  data={selectedPublication} />
   <div className='flex justify-center items-center my-28  '>
      <Link href="/awards">
      <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >More</button>
      </Link>
        
    </div>
   </div>
   <div className="flex mt-8  items-center justify-between">
     <div><h3 className="text-[#FFFFFF] text-3xl  ">Publications and presentations</h3></div>
     
  </div>
   <div>
   <div className='my-22'>
    <h3 className="text-[#FFFFFF] text-3xl ">Selected presentations</h3>
   </div>
   <Rows data={selectedPresentations}/>
   </div>

</div>
  )
}

export default List
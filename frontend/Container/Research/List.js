import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Link from 'next/link'
import Publications from '../../components/Publications'
const List = () => {
  const [selectedPublication,setSelectedPublications]=useState([]) 
  const [SelectedPresentations,setSelectedPresentations]=useState([])
  useEffect(()=>{
     const publications='*[_type=="SelectedPublications"]'
     const presentations='*[_type=="SelectedPublications"]'
     client.fetch(publications).then((data)=>{
      setSelectedPublications(data)
     })
     client.fetch(presentations).then((data)=>{
      setSelectedPresentations(data)
     })
  },[])
  console.log(selectedPublication)
  console.log(SelectedPresentations)
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
   {/* <div className="flex items-center justify-evenly text-[#FFFFFF] ">
    <span className='text-[#2ECC71] ml-4'>Filter by type</span>
    <div className='px-4'>
    <button className="bg-[#2ecc71] px-6 ml-6 py-2  rounded-full">Peer-Reviewed Journal</button>
    </div>
    <button className="bg-[#2ecc71] px-6 py-2   rounded-full">2022</button>
   </div> */}
   <div>
   <div className='my-22'>
    <h3 className="text-[#FFFFFF] text-3xl ">Selected presentations</h3>
   </div>
  <img src={}/>
        
    </div>
   </div>

</div>
  )
}

export default List
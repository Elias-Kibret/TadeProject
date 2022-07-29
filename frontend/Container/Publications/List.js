import React,{useState,useEffect} from 'react'
import Publication from '../../components/Publications'
import { client } from '../../client'
import Link from 'next/link'
const List = () => {

    const [publication,setPublications]=useState([]) 

    useEffect(()=>{
       const publications='*[_type=="Publications"]'
       client.fetch(publications).then((data)=>{
        setPublications(data)
       })
    },[])
console.log(publication)
  return (
    <div>
        <div>
        <div className="flex my-16 mx-24  items-center justify-between">
               <div><h3 className="text-[#FFFFFF] text-3xl  ">Publications </h3></div>
               <div className="flex items-center justify-between text-[#FFFFFF] mr-14">
                <button className="bg-[#2ecc71] px-4 py-2   rounded-lg">All</button>
                <Link href="">
                    <a className="flex items-center mx-6">
                    Publications
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg></span>
                    </a>
                </Link>
                <Link href="">
                    <a>
                    Year
                    </a>
                </Link>
               </div>
            </div>
        </div>
       <Publication data={publication}/> 
       <p>Hello</p>
    </div>
  )
}

export default List
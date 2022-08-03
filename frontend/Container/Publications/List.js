import React,{useState,useEffect} from 'react'
import Publication from '../../components/Publications'
import { client } from '../../client'
import {BiCaretDown} from 'react-icons/bi'
import Link from 'next/link'

const List = () => {
    const [display, setDisplay]=useState(false)
    const [publication,setPublications]=useState([]) 
    const [filtered_publication, setFiltered_publication]=useState([])
    const year=[2022, 2021,2020,2019,2018,2017]
  
    useEffect(()=>{
       const publications='*[_type=="Publications"]'
       client.fetch(publications).then((data)=>{
        setPublications(data)
        setFiltered_publication(publication)
       })
    },[])
     
   const filter=(year)=>{
       
       setFiltered_publication(publication.filter((item,index)=>{
        return item.Year===year
      }))
    
   }
  

  return (
    <div>
        <div>
        <div className="flex md: my-16 lg:mx-24  items-center flex-col sm:flex-row">
               <div><h3 className="text-[#FFFFFF] text-3xl  "><span className='text-[#2ecc71] font-semibold text-4xl '> {filtered_publication.length} </span> Publications </h3></div>
               <div className="flex items-center  text-[#FFFFFF] mx-14">
                <button className="bg-[#2ecc71] px-4 py-2 mr-6  rounded-lg">Filter</button>
                <div  className="flex items-center  cursor-pointer relative " 
                      onMouseEnter={()=>{setDisplay(true)}}
                      onMouseLeave={()=>{setDisplay(false)}}
                      >
                        <button href="/research" className="cursor-pointer ">
                            <span className='px-6 flex items-center hover-state'>
                     
                            <a>

                              Year
                                      </a>
                                    <BiCaretDown/>                

                            </span>
                        </button>
                        {
                          display&&(
                            <div className='years w-[200px] bg-[black]  flex flex-col '
                            onMouseEnter={()=>{setDisplay(true)}}
                            onMouseLeave={()=>{setDisplay(false)}}
                            >
                              {
                                year.map((item,index)=>(
                                  <button ><a className='' onClick={()=>{
                                    filter(item)
                                  }}>{item}</a></button>
                                ))
                              }
                          
                           

                        </div>

          
                          )
                        }
      


                </div>
                
               </div>
            </div>
        </div>
       <Publication data={filtered_publication}/> 
       <p>Hello</p>
    </div>
  )
}

export default List
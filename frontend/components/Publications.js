import React ,{useState,useEffect} from 'react'
import {client} from '../client'
import Link from 'next/link'
import image from '../public/Img/awards/Mask group.jpg'
import Image from 'next/image'

const Publications = () => {
  const [news,setNew]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="Publications"]'
     client.fetch(query).then((data)=>{
      setNew(data)
     })
  },[])
const list=['Authors','Journal','Vol','Pages','Year','Cites as']
  
  return (
    <div className='w-[75%] mx-auto'>
<div className='flex'>
  <div><p className='text-[#398a5b] bg-[#141B17] w-[130px] px-4 py-2 font-semibold rounded-t-lg'>Year 2020</p></div>
  <div className='bg-black rounded-b-lg '> sjb</div>
  </div>    
 <div className="bg-[#141B17] rounded-lg px-8 py-10 rounded-t-none  text-gray-300">
  <div>
    <h2 className='mb-12'>{news[0]?.Title}</h2>
  </div>
    <div className='flex justify-between mt-10'>
    <div className=' text-sm flex text-gray-300'>
      <ul className='list-none space-y-2 font-semibold w-[100px]'>
        {
          list.map((list,index)=>(
            <li key={list+index}>{list}</li>
          ))
        }
    
      
      </ul>
      <ul className='list-none space-y-2'>
        {
          news.map((List,item)=>{
            
              
            return(
              <div key={List+item} >
              {
                List.Authors.map((item,index)=>{
                  return(
                    
                    <span key={index+item} >{index===0?<b className='mx-1'>{item}</b>:<i className='mx-1'>{item}</i>}</span>
                    
                  )
                })
              }
              <li><i>{List.Journal}</i></li> 
              <li><i>{List.Vol}</i></li>
              <li><i>{List.Pages}</i></li>
              <li><i>{List.Year}</i></li>
              <li><i>{List.Citeas}</i></li>
              </div> 
            )
          })
        }
        </ul>
      
      </div>
      <div className='w-[180px] object-contain'>
        <Image src={image} />
      </div>

    </div>
    <div>
      
    </div>
    </div>
</div> 
  )
}

export default Publications
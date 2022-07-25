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
  console.log(news)
  return (
 <div className="bg-[#141B17] rounded-lg px-8 py-10   text-gray-300">
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
              <>
              {
                List.Authors.map((item,index)=>{
                  return(
                    
                    <span >{index===0?<b className='mx-1'>{item}</b>:<i className='mx-1'>{item}</i>}</span>
                    
                  )
                })
              }
              <li><i>{List.Journal}</i></li> 
              <li><i>{List.Vol}</i></li>
              <li><i>{List.Pages}</i></li>
              <li><i>{List.Year}</i></li>
              <li><i>{List.Citeas}</i></li>
              </> 
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
  )
}

export default Publications
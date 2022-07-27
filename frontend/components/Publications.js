import React ,{useState,useEffect} from 'react'
import {client,urlFor} from '../client'
import Link from 'next/link'
import image from '../public/Img/awards/Mask group.jpg'
import Image from 'next/image'

const Publications = () => {
  const [news,setNew]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="TopPublications"]'
     client.fetch(query).then((data)=>{
      setNew(data)
     })
  },[])
const list=['Authors','Journal']
const links=['Abstract','Publisher','Download Citation']
  console.log(news)
  return (
    <div className='w-[75%] mx-auto '>
      {
        news.map((item, index)=>{
          return(
            <div className='mt-12'>



      
            <div className='flex '>
              <div><p className='text-[#2ECC71] bg-[#141B17] w-[130px] px-4 pt-4  font-semibold rounded-t-lg'>{item.Year}</p></div>
    
              </div> 
       
             <div className="bg-[#141B17] rounded-2xl px-8 py-10 rounded-t-none flex justify-between items-center text-gray-300">
    
              {
  
              }
             <div className='pr-10 w-[100%]'>
              <div>
                <h2 className='mb-3  text-lg'>{item.Title}</h2>
              </div>
                <div className='flex justify-between mt-10'>
                <div className=' text-sm flex text-gray-300 '>
                  <ul className='list-none -my-2  font-semibold w-[100px] text-[#2ECC71]'>
                    {
                      list.map((list,index)=>(
                        <li className='my-2' key={list+index}>{list}</li>
                      ))
                    }
      
        
                  </ul>
                  <ul className='list-none '>
                    
              
                
                        
                          <div key={item+item} >
                          {
                            item.Authors.map((item,index)=>{
                              return(
                      
                                <span className='-mt-2' key={index+item} >{index===0?<b className='mx-1'>{item}</b>:<i className='mx-1'>{item}</i>}</span>
                      
                              )
                            })
                          }
                          <li className='my-3'><i>{item.Journal}</i></li> 
                          {/* <li className='my-2'><i>{item.Vol}</i></li>
                          <li className='my-2'><i>{item.Pages}</i></li>
                          <li className='my-2'><i>{item.Year}</i></li>
                          <li className='my-2' ><i>{item.Citeas}</i></li> */}
                          </div> 
                        
                    
                    </ul>
        
                  </div>
        
  
                </div>
                <div className='mt-3'>
                  {
                    links.map((item,index)=>{
                      return(
                        <Link href=""><a className='mx-4 underline'>{item}</a></Link>
                      )
                    })
                  }
                </div>
      
  
                </div>
                <div className='w-[25%] object-cover '>
                    <img src={urlFor(item.images.asset._ref)} width='200px' height='300px' className='object-cover'/>
                  </div>
                </div>
                </div>
          )
        })
      
  }
</div> 

  )
}

export default Publications
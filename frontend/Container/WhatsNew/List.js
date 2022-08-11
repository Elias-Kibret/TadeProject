import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import RowUI from './News/Rows'
import ColUI from './News/Cols'
import Image from 'next/image'
const List = () => {
  const [news,setNew]=useState([]) 
  
  useEffect(()=>{
     const query='*[_type=="News"]'
     client.fetch(query).then((data)=>{
      setNew(data)
     })
    
  },[])

  return (
    <div className="  md:mt-20 md:px-20" >
      
     <RowUI data={news.filter((item,index)=>{return index===0||index%4==0})}/>
       <ColUI data={news.filter((item,index)=>{return index!=0||index%4!=0})} />
      

    
    </div>
  )
}

export default List
import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Awards from './Awards'


const List = () => {

  const [awards,setAwards]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="Awards"]'
     client.fetch(query).then((data)=>{
      setAwards(data)
     })
  },[])
  return (
    <div className=' mx-6 lg:mx-12 mt-32  '>
  
  <Awards data={awards}/>

    </div>
  )
}

export default List
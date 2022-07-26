import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Awards from './Awards'


const List = () => {

  const [awards,setAwards]=useState([]) 
  useEffect(()=>{
     const query='*[_type=="SelectedAwards"]'
     client.fetch(query).then((data)=>{
      setAwards(data)
     })
  },[])
  return (
    <div className='mx-24 mt-32  mx-auto'>
  
  <Awards data={awards}/>

    </div>
  )
}

export default List
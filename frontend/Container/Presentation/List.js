import React,{useState,useEffect} from 'react'
import { client } from '../../client'
import Rows from '../WhatsNew/News/Rows'
const List = () => {

    const [selectedPublication,setSelectedPublications]=useState([]) 
    const [selectedPresentations,setSelectedPresentations]=useState([])
    useEffect(()=>{
       
       const presentations='*[_type=="SelectedPresentations"]'  
       client.fetch(presentations).then((data)=>{
        setSelectedPresentations(data)
       })
    },[])

  return (
    <div className='mx-24'>
           <Rows data={selectedPresentations}/>
    </div>
  )
}

export default List
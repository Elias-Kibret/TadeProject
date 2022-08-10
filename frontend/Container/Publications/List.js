import React,{useState,useLayoutEffect} from 'react'
import Publication from '../../components/Publications'
import { client } from '../../client'
import {BiCaretDown} from 'react-icons/bi'
import {FaMinus} from 'react-icons/fa'
import Link from 'next/link'

const List = () => {
    const [display, setDisplay]=useState(false)
    const [displayJournal, setDisplayJournal]=useState([true])
    const [displayConfernace, setDisplayConference]=useState([true])
    const [filteredJournal,setFilteredJournal]=useState([])
    const [filteredConfernce,setFilteredConference]=useState([])
    const [conference ,setConference]=useState([])
    const [Journal,setJournal]=useState([])
    const [type, setType]=useState('')
    
  
    

    const [filtered_publication, setFiltered_publication]=useState([])
    const year=[2022,2021,2020,2019,2018]
  
    useLayoutEffect(()=>{
       const journal='*[_type=="Journalpublications"]'
       const conference='*[_type=="ConferencePublications"]'
       client.fetch(journal).then((data)=>{
        setJournal(data)
        setFilteredJournal(data)
        
       })
       client.fetch(conference).then((data)=>{
        setConference(data)
        setFilteredConference(data)
     
       })
    
    
        
    },[])
     
   const filter=(year)=>{
       
        setFilteredJournal(Journal.filter((item,index)=>{
          if(year=="All"){
            return Journal
          }
          else{
            return item.Year==year
          }
        
        }))
       
       
      
        setFilteredConference(conference.filter((item,index)=>{
          if(year=="All"){
            return conference
          }
          else{
            return item.Year==year
          }
      
        }))
  
     
       }
      
   const Toggle=(type)=>{
       if(type==='Both')
       {
        setType(type)
        setDisplayConference(true)
        setDisplayJournal(true)
      
       }
       else if(type==='Journal')
       {
        setType(type)
        setDisplayJournal(true)
        setDisplayConference(false)
        
       }
        else if(type==="Conference")
       {
        setType(type)
        setDisplayConference(true)
        setDisplayJournal(false)
        
       }
       else{
        setType('Type')
        setDisplayConference(true)
        setDisplayJournal(true)
       
       }
   }
  

  return (
    <div>
        <div>
        <div className="flex md: my-16  w-full justify-center  items-center flex-col sm:flex-row">
               <div><h3 className="text-[#FFFFFF] text-3xl  "><span className='text-[#2ecc71] font-semibold text-4xl '> {filteredConfernce.length+filteredJournal.length}</span> Publications </h3></div>
               <div className="flex items-center flex-col md:flex-row justify-between   text-[#FFFFFF] sm:mx-14">
                <div className="px-4 py-2 mr-6 font-semibold ">Filter by </div>
                
                <div className='flex justify-between'>
                  <div className='mr-8'>

               
                  <select className='text-[black]  px-3 py-1 rounded-lg bg-[#2ecc71] text-xs sm:text-sm md:text-lg'  onChange={(e)=>{Toggle(e.target.value)}}>
                    <option>Type</option>
                    <option className=''>Both</option>
                    <option>Journal</option>
                    <option>Conference</option>
                  </select>
                  </div>
                  <div className='md:mx-8'>

               
                  <select className='text-[black] rounded-lg  px-3 py-1 bg-[#2cce71] text-xs sm:text-sm md:text-lg' onChange={(e)=>{filter(e.target.value)}}>
                    <option>Year</option>
                    <option>All</option>
                     {
                      year.map((years,index)=>{
                        return(
                          <option className='h-10'>{years}</option>
                        )
                      })
                     }
                  </select>
                  </div>
                </div>
                
               </div>
            </div>
        </div>
        <div>
    
{
  displayJournal&&(
    <div>
      <div className='my-28 mx-24'>

      <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Peer-Reviewed Journal Publications
      </h2>    
      </div>
      <Publication data={filteredJournal}/>
    </div>
  )
}
         
        </div>
      
{
  displayConfernace&&(
  <div>
    <div className='my-32 mx-24'>

<h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Conference Publications (Scopus indexed)

</h2>    
</div>
    <Publication data={filteredConfernce}/>
  </div>
   )
}
       
       <p>Hello</p>
    </div>
  )
}

export default List
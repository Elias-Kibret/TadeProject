import React,{useState,useLayoutEffect} from 'react'
import Publication from '../../components/Publications'
import { client } from '../../client'
import {BiCaretDown} from 'react-icons/bi'
import {FaMinus} from 'react-icons/fa'
import Link from 'next/link'
import {motion} from 'framer-motion'
const List = () => {
    const [display, setDisplay]=useState(false)
    const [displayJournal, setDisplayJournal]=useState([true])
    const [displayConfernace, setDisplayConference]=useState([true])
    const [filteredJournal,setFilteredJournal]=useState([])
    const [filteredConfernce,setFilteredConference]=useState([])
    const [conference ,setConference]=useState([])
    const [Journal,setJournal]=useState([])
    const [type, setType]=useState('Type')
    
  
  

    const [filtered_publication, setFiltered_publication]=useState([])
    const year=[2022,2021,2020,2019,2018]
  
    useLayoutEffect(()=>{
       const journal='*[_type=="Journalpublications"]'
       const conference='*[_type=="ConferencePublications"]'
       client.fetch(journal).then((data)=>{
        setJournal(data.sort((a,b)=>(a.Order>b.Order)?1:((b.Order>a.Order)?-1:0)))
        setFilteredJournal(data.sort((a,b)=>(a.Order>b.Order)?1:((b.Order>a.Order)?-1:0)))
        
       })
       client.fetch(conference).then((data)=>{
        setConference(data.sort((a,b)=>(a.Order>b.Order)?1:((b.Order>a.Order)?-1:0)))
        setFilteredConference(data.sort((a,b)=>(a.Order>b.Order)?1:((b.Order>a.Order)?-1:0)))
     
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
   console.log(type)

  return (
    <div>
        <div>
        <div className="flex md: my-16  w-full justify-center  items-center flex-col sm:flex-row">
               <div><h3 className="text-[#FFFFFF] text-3xl  "><span className='text-[#2ecc71] font-semibold text-4xl '> {

                    (type==='Both' || type==='Type')&&(<span>{filteredConfernce.length+filteredJournal.length}</span>)
                   


               }{
                (type==='Journal')&&(<span>{filteredJournal.length}</span>)
               }
               {(type==='Conference')&&(<span>{filteredConfernce.length}</span>)}
               </span> Publications </h3></div>
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
            <div>
                    <div className='lg:mx-24 md:mx-8 mx-4'>

          {
            displayJournal&&(
              <div>
                <div className='my-28 lg:mx-24'>

                <motion.h2 
                initial={{opacity:0,x:-1000}}
                whileInView={{opacity:1,x:0}}
                transition={{
                  duration: 0.3,
                  delay:0.3
                      
                }}
                className="text-[#FFFFFF]  text-2xl md:text-3xl mt-8 w-[100%] font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Peer-Reviewed Journal Publications
                </motion.h2>    
                </div>
                <Publication data={filteredJournal}/>
              </div>
            )
          }
         
                  </div>
      
          {
            displayConfernace&&(
            <div>
              <div className='my-32 lg:mx-24'>

          <motion.h2 
          initial={{opacity:0,x:-1000}}
          whileInView={{opacity:1,x:0}}
          transition={{
            duration: 0.3,
            delay:0.3
                      
          }}
          className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold flex items-center"><FaMinus className='mr-3' />Conference Publications (Scopus indexed)

          </motion.h2>    
          </div>
              <Publication data={filteredConfernce}/>
            </div>
             )
          }
                    </div>
        </div>
        
       
      
    </div>
  )
}
    

export default List
import React ,{useState,useEffect} from 'react'
import {client,urlFor} from '../client'
import {BiDownload,BiRightTopArrowCircle} from 'react-icons/bi'
import {HiOutlineExternalLink,HiX} from 'react-icons/hi'
import Link from 'next/link'
import image from '../public/Img/awards/Mask group.jpg'
import Modal from '../components/Modal'
import { IconContext } from 'react-icons'
import {motion} from 'framer-motion'
const Publications = (props) => {
const [showModal,setShowModal]=useState(true)
const [abstract, setAbstract]=useState('')
const [abstract_title, setAbstract_title]=useState('')
const list=['Authors','Journal']
const links=['View Abstract','View at Publisher','Download Citation']
const icons=[BiRightTopArrowCircle ,HiOutlineExternalLink,BiDownload]


const handleEvent=(abstract_title,abstract,link)=>{
 if(link==='View Abstract'){
  setShowModal(!showModal)
  setAbstract(abstract)
  setAbstract_title(abstract_title)
 }
}


  return (
      <div className='relative'>
        {
          !showModal&&(  <div className=" bg-[black] absolute top-0 left-0 w-[100%]  h-[100%] flex">
          <Modal Abstract={abstract} Abstract_Title={abstract_title}/>
           <div className=' fixed  right-2 sm:right-12 md:right-36 top-16 md:top-32'>
           <IconContext.Provider
              value={{ color: 'white', size: '50px' }}
            >
              <div onClick={()=>{setShowModal(!showModal)}}>
                <HiX />
              </div>
             
            
            </IconContext.Provider>
           </div>
          </div>)
        }
      
      
        <div className='mx-auto w-full sm:w-[80%] md:w-[100%] lg:w-[90%] grid  gap-x-10 ]'>
              {
                props?.data.map((item, index)=>{
                  console.log(item.Type)
                  return(
                    <motion.div 
                    initial={{opacity:0,scale:0.7}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{
                      duration: 0.3,
                      
                    }}
                    whileHover={{
                      scaleX:1.05,
                      duration:0.1
                      
                    }}
                    className='mt-12 md:mx-8  mx-4 xs:mx-6' >



      
                    <div className='flex '>
                      <div><p className='text-[#2ECC71] bg-[#141B17] w-[5rem] px-4 pt-4 text-lg  font-semibold rounded-t-lg'>{item.Year}</p></div>
    
                      </div> 
       
                     <div className="bg-[#141B17]  rounded-2xl px-8 py-8 rounded-t-none flex justify-center md:justify-between flex-wrap items-center text-gray-300">
                     <div className='w-[100%] md:w-[75%]'>
                      <div>
                        <h2 className=' text-lg'>{item.Title}</h2>
                      </div>
                        <div className='flex justify-between mt-10'>
                        <div className=' text-sm flex text-gray-300 '>
                          <ul className='list-none '>
                    

                                  <div key={item+item} >
                                    <span className='text-[#2ECC71] font-semibold mr-2'>Authors</span>
                                  {
                                    item.Authors?.map((item,index)=>{
                                      return(
                      
                                        <span className='-mt-2 text-xs' key={index+item} >{item==='Wakjira T'?(<b className='mr-2'>{item}</b>):(<i className='mr-2'>{item}</i>)}</span>
                      
                                      )
                                    })
                                  }
                                  <li className='my-3 text-xs'><span className='text-[#2ECC71] font-semibold mr-2 capitalize'>{item.Type} </span><i>{item.Journal}</i></li> 
                                  </div> 
                        
                    
                            </ul>
        
                          </div>
        
  
                        </div>
                        <div className='md:flex justify-between items-center'>
                        <div className='mt-3 flex  flex-col sm:flex-row'>
                            {
                              links.map((link,index)=>{
                              
                                const Icon=icons[index]
                                return(
                                  <div>
                                    <div className='flex mr-4 '   onClick={()=>{handleEvent(item.Abstract_Title,item.Abstract,link)}}>
                                      <Link href="">
                                      <a className=' underline text-xs  flex mr-2'>{link}</a></Link>
                                      <Icon/>
                                    </div>
                                  </div>

                        
                                )
                              })
                            }
                          </div>
                          <div className=' object-cover mt-6 xs:hidden'>
                            <img src={urlFor(item.images.asset._ref)} width='200px' height='200px' className='object-cover'/>
                          </div>
                        </div>
                        
      
  
                        </div>
                        <div className=' object-cover mt-6 hidden xs:block '>
                            <img src={urlFor(item.images.asset._ref)} width='120px' height='250px' className='object-cover'/>
                          </div>
                        </div>
                        </motion.div>
                  )
                })
      
          }
        </div>
      </div>
     

  )
}

export default Publications
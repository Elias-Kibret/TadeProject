import { useContext,useState,useRef } from 'react';
import {FaMinus} from 'react-icons/fa'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/router'
import Notification from '../components/Notification';
import {motion} from 'framer-motion'
const Contact = () => {
const [show,setShow]=useState(false)    
const router = useRouter()
const NotificationRef = useRef(null);
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit =(data) => {
  
   fetch('api/contact',
    {
      method:'POST',
      body:JSON.stringify(data),
    }).then(()=>{

    }).catch((err)=>{
      console.log(err)
    })
    NotificationRef.current?.scrollIntoView({behavior: 'smooth'})
     setShow(!show)
     setTimeout(()=>{
        router.back()
     },2000)
    
  }
  return (
    <div className="mx-auto md:px-18 lg:px-24  mt-32 relative" ref={NotificationRef} >
    
        <div>
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> Contact</h2>
            
        </div>
        {
            show&&( <div 
                className=' mt-20'>
                <Notification/>
                </div>)
           
        }
        
       {!show&&(
    <form onSubmit={handleSubmit(onSubmit)}>
          
    <div className="flex flex-col sm:grid md:grid-cols-2 gap-x-20 w-[90%] sm:px-5 mx-auto mt-12">
        <div className="flex flex-col flex-1">
        <input 
        {...register("name",{required:true})}
        type="text" id="input-name" placeholder="Name" className=" pl-5  mb-7  rounded-lg py-2 sm:py-4"/>


      <input
        {...register("email",{required:true})}
        type="email" id="input-email" placeholder="Email" className="pl-5 pr-6 mb-7  rounded-lg py-2 sm:py-4"/>
        <input
        {...register('subject',{required:true})}
        type="text" id="inpu-email" placeholder="SubJect" className="pl-5 pr-6 mb-7  rounded-lg py-2 sm:py-4"/>  
        </div>
        <div className="flex flex-col">
        <textarea 
          {...register("text",{required:true})}
          id="input-Message" placeholder="Message" className=" w-full pl-10 pt-4 pb-20 rounded-lg " />
          <input type="submit"  className="bg-[#2ECC71]  flex justify-center text-black text-lg my-10 font-semibold rounded-lg py-2 md:py-3 hover:bg-[#28a65c] hover:border-2 hover:border-[#2ECC71] " /> 
        </div>
          
          
    </div>
    <div className='flex flex-col p-5'>
        {
          errors.name&&(<span className="text-red-500">The Name field is required</span>)
        }
        {
          errors.email&&(<span className="text-red-500">The Email field is required</span>)
        }
        {
          errors.text&&(<span className="text-red-500">The Message field is required</span>)
        }
        {
          errors.subject&&(<span className="text-red-500">The subject field is required</span>)
        }
              
      </div>
    </form>
       )}
        

       
    </div>
  )
}

export default Contact
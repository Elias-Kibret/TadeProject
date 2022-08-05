import { useContext } from 'react';
import { AppContext } from '../../components/Layout';
import {FaMinus} from 'react-icons/fa'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'


const Contact = () => {
  const [contactRef]=useContext(AppContext)
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
  }
  return (
    <div className="px-6 mx-auto md:px-24 over" ref={contactRef}>
        <div>
        <h2 className="text-[#A9A9A9] text-xl flex items-center font-bold"><span className=" text-[#A9A9A9] px-2 "><FaMinus /></span> Contact</h2>
            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Contact Me</h2>    
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-20 px:5 sm:px-14 mx-auto mt-12">
            <div className="flex flex-col">
            <input 
            {...register("name",{required:true})}
            type="text" id="input-name" placeholder="Name" className=" pl-10 pr-36 rounded-lg py-5"/>


          <input
            {...register("email",{required:true})}
            type="email" id="input-email" placeholder="Email" className="my-10 pl-10 pr-36 rounded-lg py-5"/>
            <input
            {...register('subject',{required:true})}
            type="text" id="inpu-email" placeholder="SubJect" className="pl-10 mb-7 pr-36 rounded-lg py-5"/>  
            </div>
            <div className="flex flex-col">
            <textarea 
              {...register("text",{required:true})}
              id="input-Message" placeholder="Message" className="  pl-10 pt-4 pb-28 rounded-lg " />
              <input type="submit"  className="bg-[#2ECC71]  flex justify-center text-black text-lg my-10 font-semibold rounded-lg py-5 hover:bg-[#28a65c] hover:border-2 hover:border-[#2ECC71] "/> 
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
    </div>
  )
}

export default Contact
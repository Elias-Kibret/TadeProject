const Marks = () => {
  return (
    <>

        <div className='flex flex-col  ml-7 xs:ml-[70px] sm:ml-0  sm:flex-row justify-between  mt-5 text-gray-200'>
           
           <div className=' flex flex-col   '>
             
            <div id='triangle-right'  >
               <p className='text-sm -ml-16'>14+</p>
            </div>
            <div>
            <p className='text-sm text mt-3'>Awards <br/>   </p>
            </div>
           </div>
           <div className='mt-6 sm:mt-0 sm:mx-20'>
     
            <div id='triangle-right'  >
               <p className='text-sm text-gray-100 -ml-16'>30+</p> 
            </div>
            <p className='text-sm  mt-3'>Publications  and<br/>
             Presentations</p>
           </div>
        </div>  
    </>
  )
}

export default Marks
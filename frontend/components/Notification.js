import picture from '../public/Img/Profile.jpg'
import Image from 'next/image'
const Notification = () => {
  return (
    <div className='bg-[#CBE4F9]  md:-top-10 w-[320px] md:w-[500px] mx-auto  py-3 md:py-5 px-4 md:px-6 shadow-lg rounded-md'>
        <div className='flex justify-start items-center'>
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain'>
            <Image src={picture} alt="profile" className='w-[40px] h-[40px]  object-contain rounded-full'/>
            </div>
        
        <h1 className='font-semibold ml-4'>Tadesse G. Wakjira</h1>
        </div>
        <div className='mt-4'>
        <p>Thank you for Reaching out <br className='md:hidden'/> I will get back to you soon</p>
        </div>
        
    </div>
  )
}

export default Notification
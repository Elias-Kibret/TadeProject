import {motion} from 'framer-motion'
const Title = () => {
  return (
    
          <div className='inline-block title font-[Poppins] text-center  sm:text-start text-3xl sm:text-5xl font-extrabold pt-10 sm:pt-20'>
            <h1 className='text-[#FFFFFF] py-3 sm:py-5  typing-demo text-3xl'>Tadesse</h1> 
            <motion.h1

            initial={{x:-700}}
            animate={{ x:0}}
            transition={{delay:1}}
            className='text-[#2Ecc71]'>G.Wakjira, PHD</motion.h1>
          </div>
    
  )
}

export default Title
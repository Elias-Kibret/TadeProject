import {motion} from 'framer-motion'
const ImageHero = () => {
  return (
    <motion.div 
    className='hero-image h-[16rem] ml-[6rem] xs:h-[25rem]  
              xl:ml-[100px]  
              lg:h-[36rem] lg:w-[100%]
              sm:ml-[0rem] 
            '
    initial={{scale:.5}}
    animate={{scale:1}}
    transition={{delay:.5, stiffness:100}}
    >
        
    </motion.div>
  )
}

export default ImageHero
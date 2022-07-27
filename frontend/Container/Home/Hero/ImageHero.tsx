import {motion} from 'framer-motion'
const ImageHero = () => {
  return (
    <motion.div className='hero-image h-[22rem] ml-[60px] xs:ml-[250px] md:ml-[0px] xl:ml-[100px] sm:h-[25rem] lg:h-[33rem] lg:w-[100%] lg:-mr-36 xl:-mr-38 '
    initial={{scale:.5}}
    animate={{scale:1}}
    transition={{delay:.5, stiffness:100}}
    >
        
    </motion.div>
  )
}

export default ImageHero
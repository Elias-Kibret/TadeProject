import {motion} from 'framer-motion'
const About = () => {
  return (
    <>
        <motion.p className='px-10 sm:p-0 text-sm sm:text-xl font-light my-5  text-gray-300 '
           initial={{opacity:0.3}}
           animate={{opacity:1}}
           transition={{delay:1.5}}
        >
          I'm a dedicated scholar and researcher. 
          My work has been recognized on numerous occasions. 
          Some of the recognitions include the Emir (Prince) Gold Medal

          </motion.p>
    </>
  )
}

export default About
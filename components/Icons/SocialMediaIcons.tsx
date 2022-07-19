import React from 'react'
import Link from "next/link"
import Image from "next/image"
import googleScholar from '../../public/Img/Icons/googleScholar.png'
import loop from '../../public/Img/Icons/loop.png'
import orcidid from '../../public/Img/Icons/ORCIDiD.png'
import researchGate from '../../public/Img/Icons/researchgate.png'
const icons=[googleScholar,loop,researchGate,orcidid]
const SocialMediaIcons = () => {
  return (
    <>
    <div className='mt-6 '>
    <div className='  w-[160px] sm:w-[200px]  flex items-center text-white justify-between'>
        {
          icons.map((item,index)=>{
            
              return(
                  <Link className='' href="">
                    <a >
                    <Image src={item} className=" hover-state object-contain rounded-full px-10" width={35} height={35}/>
                    </a>
                      
                      </Link>
              )
          })
        }

       </div>
    </div>
</>
  )
}

export default SocialMediaIcons
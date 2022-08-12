import React from 'react'
import Link from "next/link"
import Image from "next/image"
import googleScholar from '../../public/Img/Icons/googleScholar.png'
import loop from '../../public/Img/Icons/loop.png'
import orcidid from '../../public/Img/Icons/ORCIDiD.png'
import Linkedin from '../../public/Img/Icons/linkedin-logo.png'
import researchGate from '../../public/Img/Icons/researchgate.png'
const icons=[googleScholar,loop,researchGate,orcidid,Linkedin]
const link=['https://www.google.com/url?q=https%3A%2F%2Fscholar.google.it%2Fcitations%3Fuser%3DKa3iXSoAAAAJ%26hl%3Den&sa=D',
             'https://www.google.com/url?q=https%3A%2F%2Fwww.researchgate.net%2Fprofile%2FTadesse-Wakjira&sa=D',
            'https://www.google.com/url?q=https%3A%2F%2Floop.frontiersin.org%2Fpeople%2F1855862%2Foverview&sa=D',
            'https://www.google.com/url?q=https%3A%2F%2Forcid.org%2F0000-0003-2572-6329&sa=D',
            'https://www.linkedin.com/in/tadessewakjira/'
           ]
const SocialMediaIcons = () => {
  return (
    <>
    <div className='mt-6 '>
    <div className='  w-[160px] sm:w-[200px]  flex items-center text-white justify-between'>
        {
          icons.map((item,index)=>{
            
              return(
                  <Link className='' href={link[index]}>
                    <a >
                    <Image src={item} className=" hover-state object-contain rounded-full px-10" width={32} height={32}/>
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
import Link from "next/link"
import Image from "next/image"
import Books from '../../public/Img/Books.jpg'
const persentaions = () => {
  return (
    <div className="px-24">
               <div>
                <h3 className="text-[#A9A9A9] flex items-center"><span className="font-[800]">__</span>Research</h3>
                <div className="flex mt-8  items-center justify-between">
                   <div><h3 className="text-[#FFFFFF] text-3xl  ">Publications and presentations</h3></div>
                   <div className="flex items-center justify-between text-[#FFFFFF] mr-14">
                    <button className="bg-[#2ecc71] px-4 py-2   rounded-lg">All</button>
                    <Link href="">
                        <a className="flex items-center mx-6">
                        Publications
                        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  =          </svg></span>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                        Presentations
                        </a>
                    </Link>
                   </div>
                </div>
                
               </div>

               <div className="my-14 grid grid-cols-2 gap-16">
               <div className="flex bg-[#141B17] py-10 px-8 rounded-lg">
                     <div className="  pr-12">
                      <p className="text-[#FFFFFF]  my-4"> Repair and Retrofit of RC Bridge Piers 
                        with Steel-Reinforced Grout Jackets: An 
                        Experimental Investigation.
                        </p>
                        <p className="text-[#2ecc71] ">
                          Kennedy-Kuiper R., Wakjira T., Alam MS.
                        </p>
                        <p className="mt-2 text-[#FFFFFF]"><i>Journal of Bridge Engineering (ASCE) 27 (8)</i></p>
                     </div>
                     <div className="h-full flex items-center">
                      <Image src={Books} className="" height={470} width={350} />
                     </div>
                   </div>
                   <div className="flex bg-[#141B17] py-10 px-8 rounded-lg">
                     <div className="  pr-12">
                      <p className="text-[#FFFFFF]  my-4"> Repair and Retrofit of RC Bridge Piers 
                        with Steel-Reinforced Grout Jackets: An 
                        Experimental Investigation.
                        </p>
                        <p className="text-[#2ecc71] ">
                          Kennedy-Kuiper R., Wakjira T., Alam MS.
                        </p>
                        <p className="mt-2 text-[#FFFFFF]"><i>Journal of Bridge Engineering (ASCE) 27 (8)</i></p>
                     </div>
                     <div className="h-full flex items-center">
                      <Image src={Books} className="" height={470} width={350} />
                     </div>
                   </div>
                   <div className="flex bg-[#141B17] py-10 px-8 rounded-lg">
                     <div className="  pr-12">
                      <p className="text-[#FFFFFF]  my-4"> Repair and Retrofit of RC Bridge Piers 
                        with Steel-Reinforced Grout Jackets: An 
                        Experimental Investigation.
                        </p>
                        <p className="text-[#2ecc71] ">
                          Kennedy-Kuiper R., Wakjira T., Alam MS.
                        </p>
                        <p className="mt-2 text-[#FFFFFF]"><i>Journal of Bridge Engineering (ASCE) 27 (8)</i></p>
                     </div>
                     <div className="h-full flex items-center">
                      <Image src={Books} className="" height={470} width={350} />
                     </div>
                   </div>
                   

                   <div className="flex bg-[#141B17] py-10 px-8 rounded-lg">
                   <div className="  pr-12">
                    <p className="text-[#FFFFFF] my-4"> Repair and Retrofit of RC Bridge Piers 
                      with Steel-Reinforced Grout Jackets: An 
                      Experimental Investigation.
                      </p>
                      <p className="text-[#2ecc71] ">
                        Kennedy-Kuiper R., Wakjira T., Alam MS.
                      </p>
                      <p className="mt-2 text-[#FFFFFF]"><i>Journal of Bridge Engineering (ASCE) 27 (8)</i></p>
                   </div>
                   <div className="h-full flex items-center">
                    <Image src={Books} className="" height={470} width={350} />
                   </div>
                 </div>

               </div>
               <div className='flex justify-center items-center my-28 hover-state '>
      <button className='px-8 py-4 text-[#FFFFFF] bg-[#2ECC71] rounded-lg' >View All</button>
      </div>
    </div>
  )
}

export default persentaions
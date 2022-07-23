import Link from "next/link"

const Footer = () => {
  return (
    <div className=" bg-[#141B17] text-white mt-32">
        <div className="flex flex-wrap-reverse justify-center sm:justify-between items-center  w-4/5 sm:w-2/5 mx-auto pt-20 pb-40" >
        <div className="mt-10 sm:mt-0">
            <div className="text-4xl font-semibold ">
            <p className="py-1" >Tadesse</p>
                 <p className="text-[#2ECC71] py-1">G.Wakijra</p>
            </div>
         
         <p className="py-1">&copy; by Tadesse Wakjira</p>
        </div>
        <div className=" grid grid-cols-2 gap-x-8 sm:flex sm:flex-col">
           <Link href="" ><a className="py-1">Home</a></Link>
           <Link href=""><a className="py-1">What's New</a></Link>
           <Link href=""><a className="py-1">Research</a></Link>
           <Link href=""><a className="py-1">Awards</a></Link>
        </div>
        </div>
    </div>
  )
}

export default Footer
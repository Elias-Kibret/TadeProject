import Link from 'next/link'
const Publications = () => {
  return (
 <div className="absolute  top-20 -mx-10 p-6 -mt-2 space-y-3 w-96 h-32 bg-black border-b border-l border-r border-gray-400 ">
    <div className="text-gray-400 flex flex-col">
       <Link href=""><a>Journal Papers</a></Link>
       <Link href=""><a>Conferance Papers</a></Link>
       <Link href=""><a>Acadamic Theses</a></Link> 
    </div>

</div> 
  )
}

export default Publications
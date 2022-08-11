import Link from "next/link"
const Button = () => {
  return (
    <>
    <Link href='/about'>

          <button className='text-[#FFFFFF] w-[150px] flex bg-[#2ecc71] text-sm py-3 h-[45px] mr-5 my-3 px-6 rounded-xl hover-state'>
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        </Link>
    </>
  )
}

export default Button
const Contact = () => {
  return (
    <div className="px-6 mx-auto md:px-24 over">
        <div>
        <h2 className="text-[#A9A9A9] text-xl "><span className=" text-[#A9A9A9]   ">__</span> Contact</h2>
            <h2 className="text-[#FFFFFF] text-3xl mt-8  font-[poppins] font-bold">Contact Me</h2>    
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-20 px:5 sm:px-14 mx-auto ">
            <div className="flex flex-col">
            <input type="text" id="input-name" placeholder="Name" className="my-10 pl-10 pr-36 rounded-lg py-5"/>
            <input type="text" id="input-Message" placeholder="Message" className="  pl-10 pt-6 pb-32 rounded-lg " />
            </div>
            <div className="flex flex-col">
              <input type="email" id="input-email" placeholder="Email" className="my-10 pl-10 pr-36 rounded-lg py-5"/>
              <input type="text" id="inpu-email" placeholder="SubJect" className="pl-10 pr-36 rounded-lg py-5"/>  
              <button type="submit"  className="bg-[#2ECC71]  flex justify-center text-black text-lg my-10 font-semibold rounded-lg py-5 hover:text-[#2ECC71] hover:bg-[black] hover:border-2 hover:border-[#2ECC71] "> Send</button >
            </div>
        </div>
    </div>
  )
}

export default Contact
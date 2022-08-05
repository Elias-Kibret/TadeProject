import { createContext,useRef } from "react";
import Header from "./Header"
import Footer from "./Footer";
const Layout = ({children}) => {
  const contactRef=useRef(null)
  return (
    
      <div className="relative  overflow-hidden">
          <Header />
          {children}
          <Footer/>
      </div>
    
    
  )
}

export default Layout
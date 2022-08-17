import { createContext,useRef } from "react";
import Header from "./Header"
import Footer from "./Footer";
const Layout = ({children}) => {
  return (
    
      <div className="relative  overflow-hidden">
          <Header />
          {children}
          <Footer/>
      </div>
    
    
  )
}

export default Layout
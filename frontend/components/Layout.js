import { createContext,useRef } from "react";
import Header from "./Header"
import Footer from "./Footer";
export const AppContext=createContext(null)

const Layout = ({children}) => {
  const contactRef=useRef(null)
  return (
    <AppContext.Provider value={[contactRef]}>
      <div className="relative  overflow-hidden">
          <Header />
          {children}
          <Footer/>
      </div>
    </AppContext.Provider>
    
  )
}

export default Layout
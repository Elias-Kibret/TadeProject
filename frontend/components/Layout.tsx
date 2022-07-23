import Header from "../components/Header"
import Footer from "./Footer";
type Props = {

    children: JSX.Element,
  };
const Layout = ({children}:Props) => {
  return (
    <div className="relative  overflow-hidden">
        <Header />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
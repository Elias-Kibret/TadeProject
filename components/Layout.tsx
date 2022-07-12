import Header from "../components/Header"
type Props = {

    children: JSX.Element,
  };
const Layout = ({children}:Props) => {
  return (
    <div className="relative  overflow-hidden">
        <Header />
        {children}
        
    </div>
  )
}

export default Layout
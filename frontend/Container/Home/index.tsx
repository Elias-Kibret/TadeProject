import Hero from "./Hero"
import Contact from "./Contact"
import New from "./what_Is_new"
import Awards from "./Awards"
import Publications from "../../components/Publications"
import Persentations from './Persentations'
const index = () => {
  return (
<>
    <Hero/>
    <New/>
    <div className="grid  gap-10">
    <Persentations/>
    </div>
    
    <Awards/>
    <Contact/>
</>
  )
}

export default index



import Link from 'next/link'
import image from '../public/Img/awards/award-1.png'
const Publications = () => {
  return (
 <div className="bg-[#141B17] rounded-lg px-8 py-10">
  <div>
    <h2 className='text-[#FFFFFF]'>Machine learning-based shear capacity prediction and reliability analysis of shear-critical 
      RC beams strengthened with inorganic composites.</h2>
  </div>
    <div className='flex justify-between'>
      <div className='gird grid-cols-2 gap-x-5'>
      
      </div>
      <div>
        <img src={image} width='200px' height='400px'/>
      </div>
    </div>
    <div>
      <Link></Link>
    </div>

</div> 
  )
}

export default Publications
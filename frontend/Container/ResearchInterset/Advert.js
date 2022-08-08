import React from 'react'

const Advert = () => {
  return (
    <div className='text-white mx-6 sm:mx-24 my-20 bg-[#141B17] px-10 sm:px-14 py-10 rounded-xl'>
        <div className='mb-10'>
            <h1 className='text-[#2cee71] mb-3 text-xl sm:text-2xl font-semibold'>Research Statement</h1>
            <p className=''>An update research statement is available upon request</p>
        </div>
        <div>
            <h1 className='text-[#2cee71] mb-3 text-xl sm:text-2xl font-semibold'>Research Goal</h1>
            <p className='text-justify text-sm sm:text-lg'> The overarching goal of my research is to enhance the sustainability 
                and resilience of critical infrastructure and ultimately improve 
                community resilience post extreme events such as earthquakes. 
                To achieve this goal, I employ a unified approach that integrates
                traditional approaches (e.g., experimental, analytical, and numerical models) 
                with emerging techniques such as artificial intelligence (AI) 
                including machine learning and deep learning, genetic programming,
                and multi-objective optimization algorithms.
            </p>
        </div>
    </div>
  )
}

export default Advert
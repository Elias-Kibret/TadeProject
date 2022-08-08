import React from 'react'
import Hero from './Hero'
import Descriptions from './Descriptions'
import List from './List'
const Index = () => {
  return (
    <div className='px-4 md:px-24'>
        <Hero/>
        <Descriptions/>
        <List/>
    </div>
  )
}

export default Index
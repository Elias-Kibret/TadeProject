import React from 'react'
import Hero from './Hero'
import Descriptions from './Descriptions'
import Notice from './Notice'
import AreaOfContribution from './AreaOfContribution'
import List from './List'
const Index = () => {
  return (
    <div className='px-4 md:px-24'>
        <Hero/>
        <Descriptions/>
        <List/>
        <Notice/>
        <AreaOfContribution/>
        
    </div>
  )
}

export default Index
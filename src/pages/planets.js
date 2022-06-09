import React from 'react'
import { Hero } from '../components/Hero'
import { Planet } from '../components/Planet'

const Planets = () => {
  return (
    <>
        <Hero title='PLANETS' classname='lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-14 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-700' href='#planet'/>
        <Planet />
   </>
  )
}

export default Planets
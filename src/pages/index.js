import React from 'react'
import { Character } from '../components/Character'
import { Hero } from '../components/Hero'

const Characters = () => {
  return (
   <>
    <Hero title='CHARACTERS' classname='lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-14 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-700' href='#character'/>
    <Character />
   </>
  )
}

export default Characters
import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-yellow-600' : 'hidden'} onClick={toggle}>
        <Link className='p-4 font-bold' to='/'>Characters</Link>
        <Link className='p-4 font-bold' to='/planet'>Planets</Link>
        <Link className='p-4 font-bold' to='/vehicle'>Vehicles</Link>
    </div>
  )
}

export default Dropdown
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
        <Link to="/" className='pl-4 md:pl-8 font-press-start hover:text-yellow-600'>Star Wars</Link>
        <div className='px-4 cursor-pointer md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className='pr-8 md:block hidden'>
            <Link className='p-4 font-bold hover:text-yellow-600' to="/">Characters</Link>
            <Link className='p-4 font-bold hover:text-yellow-600' to="/planet">Planets</Link>
            <Link className='p-4 font-bold hover:text-yellow-600' to="/vehicle">Vehicles</Link>
        </div>
    </nav>
  )
}

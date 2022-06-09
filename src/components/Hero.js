import React from 'react'

export const Hero = (props) => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center pb-4 sm:pb-12'>
        <h1 className={props.classname}>
            {props.title} 
        </h1>
        <a href={props.href} className='py-6 px-10 bg-yellow-300 rounded-3xl text-xl hover:bg-yellow-400 transition duration-200 ease-in-out flex items-center animate-pulse'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
        </a>
    </div>
  )
}


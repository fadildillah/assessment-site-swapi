import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const CharacterDetails = (props) => {
    const location = useLocation()
    const state = location.state

    const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/'

    return (
        <>
            {state && (
                <>
                    <div className="w-2/3 mx-auto">
                        <Link to="/" className='flex pt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-black text-md font-bold">Back</span>
                        </Link>
                        <div className='p-6 flex flex-col sm:flex sm:flex-row sm:justify-center  '>
                            <img className='h-80 rounded-lg shadow-lg' src={`${imgUrl}${state.person.url.split('/')[state.person.url.split('/').length - 2]}.jpg`} alt={state.person.name} />
                            <table className='w-2/4  text-right bg-transparent'>
                                <tbody>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Name</td>
                                        <td className='font-bold'>{state.person.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Gender</td>
                                        <td className='font-bold'>{state.person.gender}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Height</td>
                                        <td className='font-bold'>{state.person.height} cm</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Mass</td>
                                        <td className='font-bold'>{state.person.mass}kg</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Hair Color</td>
                                        <td className='font-bold'>{state.person.hair_color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
            
        </> 
    )
}

export default CharacterDetails
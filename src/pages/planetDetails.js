import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const PlanetDetails = (props) => {

    const location = useLocation()
    const state = location.state

    const imgUrl = 'https://starwars-visualguide.com/assets/img/planets/'
    
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
                            <img className='h-80 rounded-lg shadow-lg' src={`${imgUrl}${state.planet.url.split('/')[state.planet.url.split('/').length - 2]}.jpg`} alt={state.planet.name} />
                            <table className='w-2/4  text-right bg-transparent'>
                                <tbody>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Name</td>
                                        <td className='font-bold'>{state.planet.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Terrain</td>
                                        <td className='font-bold'>{state.planet.terrain}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Population</td>
                                        <td className='font-bold'>{state.planet.population}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-xl text-gray-700'>Climate</td>
                                        <td className='font-bold'>{state.planet.climate}</td>
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

export default PlanetDetails
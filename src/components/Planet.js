import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Planet = ({setPlanet}) => {
    const baseUrl = 'https://swapi.dev/api/planets/'
    const imgUrl = 'https://starwars-visualguide.com/assets/img/planets/'
    
    const [planets, setPlanets] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(false)
            try {
                const res = await fetch(`${baseUrl}`)
                const data = await res.json()
                setPlanets(data.results)
            } catch (err) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    const getId = (url) => {
        return url.split('/')[url.split('/').length - 2]
    }

    return (
        <div id='planet' className="bg-white h-full flex flex-col justify-center items-center pb-4 sm:pb-12">
            <div className="w-3/4 mx-auto">
                <div className='p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {loading ? <p>Loading...</p> : error ? <p>Error...</p> : planets.map(planet => (
                        <Link key={planet.name} to={`/planet/${planet.name}`} state={{planet}} className='bg-gradient-to-r from-yellow-500 to-amber-700 rounded-2xl shadow-lg'>
                            <img src={`${imgUrl}${getId(planet.url)}.jpg`} alt={planet.name} className='h-auto w-full object-cover rounded-t-xl' />
                            <h2 className='text-xl font-bold text-black text-center py-4'>{planet.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

Planet.propTypes = {
    setPlanet: PropTypes.func.isRequired,
}
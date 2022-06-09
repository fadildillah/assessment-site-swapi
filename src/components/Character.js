import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Character = ({setCharacter}) => {
    const baseUrl = 'https://swapi.dev/api/people/'
    const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/'

    const [people, setPeople] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(false)
            try {
                const res = await fetch(`${baseUrl}`)
                const data = await res.json()
                setPeople(data.results)
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
    <div id='character' className="bg-white h-full flex flex-col justify-center items-center pb-4 sm:pb-12">
        <div className="w-3/4 mx-auto">
            <div className='p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
                {loading ? <p>Loading...</p> : error ? <p>Error...</p> : people.map(person => (
                    <Link key={person.name} to={`/character/${person.name}`} state={{person}} className='bg-gradient-to-r from-yellow-500 to-amber-700 rounded-2xl shadow-lg'>
                        <img src={`${imgUrl}${getId(person.url)}.jpg`} alt={person.name} className='h-auto w-full object-cover rounded-t-xl' />
                        <h2 className='text-xl font-bold text-black text-center py-4'>{person.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

Character.propTypes = {
    setCharacter: PropTypes.func.isRequired,
}

